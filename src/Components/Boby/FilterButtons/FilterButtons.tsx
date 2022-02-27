import React, {useState} from 'react';
import {Button} from "../../Button/Button";
import {FilterType} from "../../../App";

type FilterButtonsTypeProps = {
    callback:(newFilter: FilterType)=> void
}



export const FilterButtons = (props: FilterButtonsTypeProps) => {


const changeFilter = (newFilter:FilterType) => {
    props.callback(newFilter)
}

    return (
        <div>
            <Button title={'all'} callback={()=>changeFilter('all')}/>
            <Button title={'active'} callback={()=>changeFilter('active')}/>
            <Button title={'completed'} callback={()=>changeFilter('completed')}/>
        </div>
    );
};

