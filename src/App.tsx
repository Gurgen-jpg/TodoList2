import React, {useState} from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Body, TaskTypeProps} from "./Components/Boby/Body";
import {v1} from "uuid";
import { TodoList } from './Components/TodoList/TodoList';



export type FilterType = 'all' | 'active' | 'completed'


function App() {

    const [tasks, setTasks] = useState<Array<TaskTypeProps>>([
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'REACT', isDone: false},
        {id: v1(), title: 'GIT', isDone: false}
    ])

    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

    const [title, setTitle] = useState<string>('')

    const [error, setError] = useState<boolean>(false)

    //логика соощения ошибки, если error не пустая строка
    const errorMessage = (error:boolean) => {
      setError(error)
    }


    //логика фильтрации
    //замена фильтра в стейте
    const changeFilter = (newFilter: FilterType) => {
        setFilter(newFilter)
    }

    //перерисовка стейта с задачами в зависимости от фильтра, take FILTER, return ARRAY
    const filterTasks = () => {
        switch (filter) {
            case "completed":
                return tasks.filter(el => el.isDone)
            case "active":
                return tasks.filter(el => !el.isDone)
            default:
                return tasks
        }
    }

    //присвоить значение фильтрации и прокидываю в пропсы <Body/>
    const tasksAfterFilter = filterTasks()

    //Логика удаления
    // Функция удаления таски
    const deleteButton = (id:string) => {
        const deletedTasks = tasks.filter((task ) => {
            return (task.id !== id)
        })
        setTasks(deletedTasks)
    }

    //логика добавления новой задачи в массив tasks

    //изменение в title (можно перекинуть title через пропсы, но этого делать не буду
    const titleForTask = (newTitle: string) => {
        setTitle(newTitle)
    }

    //Add new task in my State of Tasks
    const addTask = (title: string) => {
        setTasks([{id: v1(), title: title, isDone: false}, ...tasks])
        setTitle('')
    }

    //Логика Смены статуса выполнено / невыполнено
    //Функция принимает номер ID(:string) инпута в котором был ивент и меняет свойство isDone для
    //объекта {task} перезаписыва массив tasks
    const changeStatus = (taskId:string) => {
      setTasks(tasks.map((el) =>
          (el.id === taskId) ? {...el, isDone:!el.isDone}: el ))
        console.log(tasks)
    }

    return (
        <div className="App">
            <div>
                <TodoList
                    header={'Whats learn'}
                    callback={titleForTask}
                    callbackAddTask={addTask}
                    title={title}
                    callbackError={errorMessage}
                    error={error}

                    tasks={tasksAfterFilter}
                    deleteTask={deleteButton}
                    filterCallback={changeFilter}
                    filter={filter}
                    changeStatus={changeStatus}
                />
            </div>
        </div>
    );

}

export default App;
