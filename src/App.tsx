import React, {useState} from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {v1} from "uuid";
import {TodoList} from './Components/TodoList/TodoList';
import {AddItemForm} from "./Components/AddItem/AddItemForm";


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

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ])
    let [tasks, setTasks] = useState<TasksStateType>({
        [todolistId1]: [
            {id: v1(), title: 'HTML', isDone: true},
            {id: v1(), title: 'CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'REACT', isDone: false},
            {id: v1(), title: 'GIT', isDone: false}
        ],
        [todolistId2]: [
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'Bread', isDone: true},
            {id: v1(), title: 'Orange', isDone: true},
            {id: v1(), title: 'Water', isDone: false},
            {id: v1(), title: 'Meat', isDone: false}
        ]
    });

    //логика фильтрации и статуса
    const changeStatus = (todolistId: string, taskId: string, isDone: boolean) => {
        setTasks({
            ...tasks, [todolistId]: tasks[todolistId].map((task) => task.id === taskId
                ? {...task, isDone: isDone}
                : {...task})

        })
        console.log(`STATUS`, taskId, isDone)
    }
    const changeFilter = (todolistID: string, filterValue: FilterType) => {
        setTodolists(todolists.map(tl => tl.id === todolistID ? {...tl, filter: filterValue} : tl))
    }

    //Логика удаления
    // Функция удаления таски
    const deleteTask = (todolistId: string, taskId: string) => {
        setTasks({
            ...tasks, [todolistId]: tasks[todolistId].filter((task) => task.id !== taskId)
        })
    }
    //Ф-ция удаления тудуЛиста
    const removeTodolist = (todolistId: string) => {
        setTodolists(todolists.filter((todo) => todo.id !== todolistId))
        delete tasks[todolistId] //зачистка тасок
        setTasks({...tasks})
    }

    // логика добавления
    //Добавить таску
    const addTask = (todolistId: string, title: string) => {
        let task = {id: v1(), title: title, isDone: false}
        setTasks({...tasks, [todolistId]: [task, ...tasks[todolistId]]})
    }
    //Добавить ТудуЛист
    const addTodolist = (title: string) => {
        const newID = v1();
        setTodolists([{id: newID, title, filter: 'all'}, ...todolists])
        setTasks({
            ...tasks, [newID]: []
        })
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
