import React, {ChangeEvent} from 'react';

type InputTypeProps = {
    value: string
    callback: (title: string) => void
}

export const Input = (props:InputTypeProps) => {
    const inputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.callback(e.currentTarget.value)
    }
    return (
        <input value={props.value} onChange={inputHandler}/>
    );
};

