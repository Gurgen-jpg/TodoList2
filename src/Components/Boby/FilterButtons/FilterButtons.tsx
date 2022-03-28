import React, {useState} from 'react';
import {Button} from "../../Button/Button";
import {FilterType} from "../../../App";
import s from './../../TodoList/todoList.module.css'

type FilterButtonsTypeProps = {
    callback: (newFilter: FilterType) => void
    filter: 'all' | 'active' | 'completed'
}


export const FilterButtons = (props: FilterButtonsTypeProps) => {


    const changeFilter = (newFilter: FilterType) => {
        props.callback(newFilter)
    }

    return (
        <div>
            <Button
                title={'all'}
                className={props.filter === 'all' ? s.active : ''}
                callback={() => changeFilter('all')}/>
            <Button
                title={'active'}
                className={props.filter === 'active' ? s.active : ''}
                callback={() => changeFilter('active')}/>
            <Button
                title={'completed'}
                className={props.filter === 'completed' ? s.active : ''}
                callback={() => changeFilter('completed')}/>
        </div>
    );
};

