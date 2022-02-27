import React from 'react';

type ButtonTypeProps = {
    title: string
    callback: ()=> void
}

export const Button = (props: ButtonTypeProps) => {
    const onclickButtonHandler = () => {
      props.callback()
    }
    return (
            <button onClick={onclickButtonHandler}>{props.title}</button>
    );
};

