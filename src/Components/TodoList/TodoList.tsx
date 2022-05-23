import React from 'react';
import {FilterType, TaskType} from "../../App";
import {FilterButtons} from '../Boby/FilterButtons';
import {Task} from "../Boby/Task";
import {AddItemForm} from "../AddItem/AddItemForm";


export type TodoListType = {
    todoId: string
    header: string
    tasks: Array<TaskType>
    addTask: (todolistId: string, title: string) => void
    deleteTask: (id: string) => void
    filterCallback: (todoId: string, newFilter: FilterType) => void
    filter: 'all' | 'active' | 'completed'
    changeStatus: (taskId: string, isDone: boolean) => void
}

export const TodoList = (props: TodoListType) => {
    const addTask = (title: string) => {
      props.addTask(props.todoId, title)
    }


    return (
        <div>
            <h3>{props.header}</h3>
            <AddItemForm addTask={addTask}/>
            {
                props.tasks.map((t) =>
                    <Task key={t.id} task={t} todoId={props.todoId}
                          isDone={t.isDone} title={t.title}
                          deleteTask={props.deleteTask} changeStatus={props.changeStatus}
                    />
                )
            }
            <FilterButtons todoId={props.todoId} callback={props.filterCallback} filter={props.filter}/>
        </div>
    );
};

