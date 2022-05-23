import React from 'react';


import {FilterType} from "../../App";
import {Button} from "../Button/Button";

type FilterButtonsTypeProps = {
    todoId: string
    callback: (todoId: string, newFilter: FilterType) => void
    filter: 'all' | 'active' | 'completed'
}


export const FilterButtons = (props: FilterButtonsTypeProps) => {


    const changeFilter = (newFilter: FilterType) => {
        props.callback(props.todoId, newFilter)
    }

    return (
        <div>
            <Button
                title={'all'}
                // className={props.filter === 'all' ? s.active : ''}
                callback={() => changeFilter('all')}/>
            <Button
                title={'active'}
                // className={props.filter === 'active' ? s.active : ''}
                callback={() => changeFilter('active')}/>
            <Button
                title={'completed'}
                // className={props.filter === 'completed' ? s.active : ''}
                callback={() => changeFilter('completed')}/>
        </div>
    );
};

