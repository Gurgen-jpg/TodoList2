import React from 'react';
import './App.css';
import {v1} from "uuid";
import {TodoList} from './Components/TodoList/TodoList';
import {AddItemForm} from "./Components/AddItem/AddItemForm";
import {useDispatch} from "react-redux";
import {addTodolistAC, changeFilterAC, removeTodolistAC} from "./Bll/Todolist-reducer";
import {addTaskAC, changeTaskStatusAC, deleteTaskAC} from "./Bll/Task-reducer";
import {AppRootSelector} from "./Bll/Store";


export type FilterType = 'all' | 'active' | 'completed'
export type TodolistType = {
    id: string
    title: string
    filter: FilterType
}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TasksStateType = { [key: string]: Array<TaskType> }

function App() {
    const dispatch = useDispatch();
    const todolists = AppRootSelector<TodolistType[]>(state => state.todolist)
    const tasks = AppRootSelector<TasksStateType>(state => state.tasks)

    //логика фильтрации и статуса
    const changeStatus = (todolistId: string, taskId: string, isDone: boolean) => {
        dispatch(changeTaskStatusAC(todolistId, taskId, isDone))
    }
    const changeFilter = (todolistID: string, filterValue: FilterType) => {
        dispatch(changeFilterAC(todolistID, filterValue))
    }

    //Логика удаления
    // Функция удаления таски
    const deleteTask = (todolistId: string, taskId: string) => {
        dispatch(deleteTaskAC(todolistId, taskId))
    }
    //Ф-ция удаления тудуЛиста
    const removeTodolist = (todolistId: string) => {
        dispatch(removeTodolistAC(todolistId))
    }

    // логика добавления
    //Добавить таску
    const addTask = (todolistId: string, title: string) => {
        let task = {id: v1(), title: title, isDone: false}
        dispatch(addTaskAC(todolistId, task))

    }
    //Добавить ТудуЛист
    const addTodolist = (title: string) => {
        dispatch(addTodolistAC(title))

    }
    return (
        <div className="App">
            <AddItemForm addTask={addTodolist}/>
            <div>
                {
                    todolists.map((tl) => {
                            let tasksForTodolist = tasks[tl.id];

                            if (tl.filter === "active") {
                                tasksForTodolist = tasks[tl.id].filter((t) => t.isDone === false)
                            }
                            if (tl.filter === "completed") {
                                tasksForTodolist = tasks[tl.id].filter((t) => t.isDone === true)
                            }
                            return <TodoList
                                key={tl.id}
                                todoId={tl.id}
                                header={tl.title}
                                removeTodolist={removeTodolist}
                                tasks={tasksForTodolist}
                                addTask={addTask}
                                deleteTask={deleteTask}
                                filterCallback={changeFilter}
                                filter={tl.filter}
                                changeStatus={changeStatus}
                            />
                        }
                    )}
            </div>
        </div>
    );

}

export default App;
