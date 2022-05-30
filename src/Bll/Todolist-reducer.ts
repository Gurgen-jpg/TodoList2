import {v1} from "uuid";

export type FilterType = 'all' | 'active' | 'completed'
export type TodolistType = {
    id: string
    title: string
    filter: FilterType
}

export const todolistId1 = v1();
export const todolistId2 = v1();
export const initialState: TodolistType[] =
    [
        {id: todolistId1, title: "What to learn", filter: 'all'},
        {id: todolistId2, title: "What to buy", filter: 'all'}
    ]


export type initialStateType = TodolistType[]
export const TodolistReducer = (state: initialStateType = initialState, action: TodolistActionsType): TodolistType[] => {
    switch (action.type) {
        case "ADD-TODOLIST": {
            debugger
            console.log('ADD: ', action.title)
            return [
                {id: action.todolistId,title: action.title, filter: 'all'}, ...state
            ]
        }
        case "CHANGE-FILTER": {
            return state.map((tl) => tl.id === action.todoId
                ? {...tl, filter: action.filter}
                : {...tl})
        }
        case "REMOVE-TODOLIST": {
            return state.filter((tl) => tl.id !== action.todoId)
        }
        default:
            return [...state]
    }
}
export const addTodolistAC = (title: string) => ({
    type: 'ADD-TODOLIST', title: title, todolistId: v1()
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
export type AddTodolistACType = ReturnType<typeof addTodolistAC>
export type ChangeFilterACType = ReturnType<typeof changeFilterAC>
export type TodolistActionsType = AddTodolistACType
    | ChangeFilterACType
    | RemoveTodolistACType