import React from 'react';
import {Button} from "../Button/Button";
import {TaskTypeProps} from "./Body";
import {Checkbox} from "../Checkbox/Checkbox";

export type TaskType = {
    id: string
    isDone: boolean
    title: string
    deleteTask: (id: string) => void
    changeStatus: (taskId: string, isDone: boolean)=>void
}
export const Task = ({id, isDone,
                         title, deleteTask,
                         changeStatus}:TaskType) => {
    return (
        <li key={id}>
            <Checkbox changeStatus={changeStatus}
                      taskId={id}
                      isDone={isDone}
            />
            <span>{title}</span> <Button title={'X'} callback={()=>deleteTask(id)}/>
        </li>
    );
};

