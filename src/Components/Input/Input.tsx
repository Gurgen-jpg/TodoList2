import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputTypeProps = {
    value: string
    callback: (title: string) => void
    className?:string
    onKeyPress:(title:string)=>void
    setError:(error:boolean)=>void

}

export const Input = (props:InputTypeProps) => {

    const inputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.callback(e.currentTarget.value)
    }
    const onKeyHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        props.setError(false)
        if (e.key === 'Enter') {
            props.onKeyPress(e.currentTarget.value)
        }
    }
    return (
        <input
            value={props.value}
            onChange={inputHandler}
            className={props.className}
            onKeyPress={onKeyHandler}
        />
    );
};

