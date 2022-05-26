import React, {ChangeEvent, useState} from 'react';

export type AddItemFormType = {
    addTask: (title: string) => void
}
export const AddItemForm = (props: AddItemFormType) => {

    const [newTitle, setNewTitle] = useState<string>('')
    const [error, setError] = useState<null | string>(null)

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
        if (e.currentTarget.value.trim() !== '') {
            setError(null)
        }
    }
    const onClickHandler = () => {
        if (newTitle.trim() !== '') {
            props.addTask(newTitle)
            setNewTitle('')
        } else {
            setError('Empty title')
        }
    }

    return (
        <div>
            <div>
                <input onChange={inputHandler}
                       value={newTitle}
                       />
                <button onClick={onClickHandler}>+</button>
            </div>
            <span>{error}</span>
        </div>
    );
};

