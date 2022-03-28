import React from 'react';
import {Header} from "../Header/Header";
import {Body, TaskTypeProps} from "../Boby/Body";
import {FilterType} from "../../App";

export type TodoListType = {
/*пропсы в HEADER*/
    header: string
    callbackAddTask: (title: string) => void
    callback: (newTitle: string) => void
    title: string
    callbackError: (error: boolean) => void
    error: boolean
/*пропсы в BODY*/
    tasks: Array<TaskTypeProps>
    deleteTask: (id: string) => void
    filterCallback: (newFilter: FilterType)=> void
    filter: 'all' | 'active' | 'completed'
    changeStatus: (taskId: string, isDone: boolean)=>void
}

export const TodoList = (props:TodoListType) => {
    return (
        <div>
            <Header header={props.header}
                    callback={props.callback}
                    callbackAddTask={props.callbackAddTask}
                    title={props.title}
                    callbackError={props.callbackError}
                    error={props.error}
                // setError={errorMessage}
            />
            <Body tasks={props.tasks}
                  deleteTask={props.deleteTask}
                  filterCallback={props.filterCallback}
                  filter={props.filter}
                  changeStatus={props.changeStatus}
            />
        </div>
    );
};

