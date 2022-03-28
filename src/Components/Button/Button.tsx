import React from 'react';

type ButtonTypeProps = {
    title: string
    callback: ()=> void
    className?:string
}

export const Button = (props: ButtonTypeProps) => {
    const onclickButtonHandler = () => {
      props.callback()
    }
    return (
            <button className={props.className} onClick={onclickButtonHandler}>{props.title}</button>
    );
};

