import React, {ChangeEvent} from 'react';

type CheckboxPropsType = {
    isDone:boolean
    taskId:string
    changeStatus: (taskId: string, isDone: boolean)=>void
}

export const Checkbox = (props:CheckboxPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStatus(props.taskId, e.currentTarget.checked)
    }
    return (
        <input type={"checkbox"}
               onChange={onChangeHandler}
               checked={props.isDone}
        />
    );
};

