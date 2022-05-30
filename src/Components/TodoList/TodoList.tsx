import React from 'react';
import {TaskType} from "../../App";
import {FilterButtons} from '../Boby/FilterButtons';
import {Task} from "../Boby/Task";
import {AddItemForm} from "../AddItem/AddItemForm";
import {FilterType} from "../../Bll/Todolist-reducer";


export type TodoListPropsType = {
    todoId: string
    header: string
    filterCallback: (todoId: string, newFilter: FilterType) => void
    filter: FilterType
    removeTodolist: (id: string) => void

    tasks: Array<TaskType>
    addTask: (todolistId: string, title: string) => void
    deleteTask: (todolistId: string, taskId: string) => void

    changeStatus: (todolistId: string,taskId: string, isDone: boolean) => void
}

export const TodoList = (props: TodoListPropsType) => {

    const addTask = (title: string) => {
        props.addTask(props.todoId, title)
    }


    return (
        <div>
            <h3>{props.header}
                <button onClick={() => props.removeTodolist(props.todoId)}>X</button>
            </h3>

            <AddItemForm addTask={addTask}/>
            {
                props.tasks.map((t) =>
                    <Task key={t.id} task={t} todoId={props.todoId}
                          taskStatus={t.isDone} title={t.title}
                          deleteTask={props.deleteTask} changeStatus={props.changeStatus}
                    />
                )
            }
            <FilterButtons todoId={props.todoId} callback={props.filterCallback} filter={props.filter}/>
        </div>
    );
};

