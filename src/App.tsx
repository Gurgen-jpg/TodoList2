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


    /*const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')*/

    //логика фильтрации
    //замена фильтра в стейте
    const changeFilter = (todolistID: string, filterValue: FilterType) => {
        setTodolists(todolists.map(tl => tl.id === todolistID ? {...tl, filter: filterValue} : tl))
    }
    const addTodolist = (title: string) => {
        const newID = v1();
        setTodolists([{id: newID, title, filter: 'all'}, ...todolists])
        setTasks({
            ...tasks, [newID]: []
        })
    }
    //перерисовка стейта с задачами в зависимости от фильтра, take FILTER, return ARRAY
    const filterTasks = () => {
        /* switch (filter) {
             case "completed":
                 return tasks.filter(el => el.isDone)
             case "active":
                 return tasks.filter(el => !el.isDone)
             default:
                 return tasks
         }*/
    }

    //присвоить значение фильтрации и прокидываю в пропсы <Body/>
    const tasksAfterFilter = filterTasks()

    //Логика удаления
    // Функция удаления таски
    const deleteButton = (id: string) => {
        /* const deletedTasks = tasks.filter((task ) => {
             return (task.id !== id)
         })
         setTasks(deletedTasks)*/
    }

    //логика добавления новой задачи в массив tasks
    const addTask = (todolistId: string, title: string) => {
        let task = {id: v1(), title: title, isDone: false}
        setTasks({...tasks, [todolistId]: [task, ...tasks[todolistId]]})
    }
    //изменение в title (можно перекинуть title через пропсы, но этого делать не буду


    //Add new task in my State of Tasks


    //Логика Смены статуса выполнено / невыполнено
    //Функция принимает номер ID(:string) инпута в котором был ивент и меняет свойство isDone для
    //объекта {task} перезаписыва массив tasks
    const changeStatus = (taskId: string) => {
        /*setTasks(tasks.map((el) =>
            (el.id === taskId) ? {...el, isDone:!el.isDone}: el ))
          console.log(tasks)*/
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
                                tasks={tasksForTodolist}
                                addTask={addTask}
                                deleteTask={deleteButton}
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
