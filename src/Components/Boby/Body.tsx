import React from 'react';
import {Task} from "./Task";
import {FilterButtons} from "./FilterButtons/FilterButtons";
import {FilterType} from "../../App";

export type TaskTypeProps = {
    id: string
    isDone: boolean
    title: string
}
type BodyTypeProps = {
    tasks: Array<TaskTypeProps>
    //callback: (tasks: Array<TaskTypeProps>)=> void
    deleteTask: (id: string) => void
    filterCallback: (newFilter: FilterType)=> void
    changeStatus: (taskId: string, isDone: boolean)=>void
}


export const Body = ({tasks, deleteTask,
                         filterCallback,
                         changeStatus}:BodyTypeProps, ) => {
    return (
        <>
            <ul>
                {tasks.map((task) => {
                    return (
                        <Task id={task.id}
                              isDone={task.isDone}
                              title={task.title}
                              deleteTask={deleteTask}
                              changeStatus={changeStatus}
                        />
                    )
                })}
            </ul>
            <FilterButtons callback={filterCallback}/>
        </>
    );
};

