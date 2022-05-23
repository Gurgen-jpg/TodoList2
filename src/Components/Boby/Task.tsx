import React from 'react';
import {Button} from "../Button/Button";
import {Checkbox} from "../Checkbox/Checkbox";
import {TaskType} from "../../App";

export type TaskListType = {
    task: TaskType
    todoId: string
    isDone: boolean
    title: string
    deleteTask: (id: string) => void
    changeStatus: (taskId: string, isDone: boolean) => void
}
export const Task = ({ task,
                         todoId, isDone,
                         title, deleteTask,
                         changeStatus
                     }: TaskListType) => {
    return (
        <li key={task.id}>
            <Checkbox changeStatus={changeStatus}
                      taskId={task.id}
                      isDone={isDone}
            />
            <span>{title}</span> <Button title={'X'}
                                         callback={() => deleteTask(task.id)}
        />
        </li>
    );
};

