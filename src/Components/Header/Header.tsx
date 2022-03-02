import React, {useState} from 'react';
import {Button} from "../Button/Button";
import {Input} from '../Input/Input';


type HeaderTypeProps = {
    header: string
    callbackAddTask: (title: string) => void
    callback: (newTitle: string) => void
    title: string
    callbackError: (error: boolean) => void
    error: boolean
   // setError:(error:boolean)=>void

}

export const Header = (props: HeaderTypeProps) => {

    const callbackAddTask = () => {
        if (props.title.trim() === '') {
            props.callbackError(true)
        } else {
            props.callbackError(false)
            props.callbackAddTask(props.title.trim())  /* тримлю строку*/
        }
    }

    return (
        <div>
            <h3>{props.header}</h3>
            <Input value={props.title}
                   callback={props.callback}
                   className={props.error ? 'error' : ''}
                   onKeyPress={callbackAddTask}
                   setError={props.callbackError}

            />
            <Button title={'+'} callback={callbackAddTask}/>
            {props.error && <div className={'error-message'}>field is requared</div>}
        </div>
    );
};

