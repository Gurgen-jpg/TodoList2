import React, {useState} from 'react';
import {Button} from "../Button/Button";
import { Input } from '../Input/Input';

type HeaderTypeProps = {
    header: string
    callbackAddTask:(title:string)=>void
    callback: (newTitle:string) => void
    title:string

}

export const Header = (props: HeaderTypeProps) => {
    return (
        <div>
            <h3>{props.header}</h3>
            <Input value={props.title} callback={props.callback}  />
            <Button title={'+'} callback={()=>props.callbackAddTask(props.title)}/>
        </div>
    );
};

