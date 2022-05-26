import {v1} from "uuid";
import {FilterType} from "../App";


export const todolistId1 = v1();
export const todolistId2 = v1();
export const initialState =
    [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

export type initialStateType = typeof initialState
export const TodolistReducer = (state: initialStateType = initialState, action: TodolistActionsType) => {
    switch (action.type) {
        case "ADD-TODOLIST": {
            let newId = v1();
            return [
                ...state, {newId, title: action.title, filter: "all"}
            ]
        }
        case "CHANGE-FILTER": {
            return state.map((tl) => tl.id === action.todoId
                ? {...tl, filter: action.filter}
                : {...tl})
        }
        case "REMOVE-TODOLIST": {
            return state.filter((tl)=> tl.id !== action.todoId)
        }
        default:
            return [...state]
    }
}
export const addTodolistAC = (title: string) => ({
    type: `ADD-TODOLIST`,
    title
} as const)
export const changeFilterAC = (todoId: string, filter: FilterType) => ({
    type: `CHANGE-FILTER`,
    todoId,
    filter
} as const)
export const removeTodolistAC = (todoId: string) => ({
    type: `REMOVE-TODOLIST`,
    todoId,
} as const)
export type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>
export type AddtodolistACType = ReturnType<typeof addTodolistAC>
export type ChangeFilterACType = ReturnType<typeof changeFilterAC>
export type TodolistActionsType = AddtodolistACType
    | ChangeFilterACType
    | RemoveTodolistACType