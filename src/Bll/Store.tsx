import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {TodolistReducer} from "./Todolist-reducer";
import thunkMiddleware from 'redux-thunk'
import {TaskReducer} from "./Task-reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";


export const rootReducer = combineReducers({
    todolist: TodolistReducer,
    tasks: TaskReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof rootReducer>
export const AppRootSelector: TypedUseSelectorHook<AppRootStateType> = useSelector