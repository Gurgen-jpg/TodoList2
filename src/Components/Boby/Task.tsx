import React, {ChangeEvent} from 'react';
import {Button} from "../Button/Button";
import {TaskType} from "../../App";

export type TaskListType = {
    task: TaskType
    todoId: string
    taskStatus: boolean
    title: string
    deleteTask: (todolistId: string, taskId: string) => void
    changeStatus: (todolistId: string, taskId: string, isDone: boolean) => void
}
export const Task = ({
                         task,
                         todoId, taskStatus,
                         title, deleteTask,
                         changeStatus
                     }: TaskListType) => {

    const buttonHandler = (taskId: string) => {
        deleteTask(todoId, taskId)
    }


const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    changeStatus(todoId, task.id, e.currentTarget.checked)}

return (
    <li key={task.id}>

        <input type="checkbox"
               onChange={onChangeHandler}
               checked={task.isDone}
        />

        <span>{title}</span> <Button title={'X'}
                                     callback={() => buttonHandler(task.id)}
    />
    </li>
);
};

