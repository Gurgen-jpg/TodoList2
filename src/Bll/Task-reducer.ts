import {v1} from "uuid";
import {TaskType} from "../App";
import {AddTodolistACType, RemoveTodolistACType} from "./Todolist-reducer";
import {todolistId1, todolistId2} from "./Todolist-reducer";


export const initialState = {
    [todolistId1]: [
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'REACT', isDone: false},
        {id: v1(), title: 'GIT', isDone: false}
    ],
    [todolistId2]: [
        {id: v1(), title: 'Milk', isDone: true},
        {id: v1(), title: 'Bread', isDone: true},
        {id: v1(), title: 'Orange', isDone: true},
        {id: v1(), title: 'Water', isDone: false},
        {id: v1(), title: 'Meat', isDone: false}
    ]
}
export type TasksStateType = {
    [key: string]: Array<TaskType>
}

export type initialStateType = typeof initialState
export const TaskReducer = (state: TasksStateType = initialState, action: TaskActionsType) => {
    switch (action.type) {
        case "ADD-TODOLIST": {
            return {
                ...state, [action.todolistId]: []
            }
        }
        case "ADD-TASK": {
            const newTask: TaskType = {
                id: v1(),
                title: action.title,
                isDone: false
            }
            return {
                ...state, [action.todoId]: [newTask, ...state[action.todoId]]
            }
        }
        case "REMOVE-TODOLIST": {
            delete state[action.todoId]
            return {...state}
        }
        case "DELETE-TASK": {
            return {
                ...state, [action.todoId]: state[action.todoId].filter((t) => t.id !== action.taskId)
            }
        }
        case "CHANGE-TASK-STATUS": {
            return {
                ...state, [action.todoId]: state[action.todoId].map((t) => t.id === action.taskId
                    ? {...t, isDone: action.status}
                    : {...t})
            }
        }
        default:
            return {...state}
    }
}

export const addTaskAC = (todoId: string, title: string) => ({
    type: `ADD-TASK`,
    todoId,
    title
} as const)
export const deleteTaskAC = (todoId: string, taskId: string) => ({
    type: `DELETE-TASK`,
    todoId,
    taskId,
} as const)
export const changeTaskStatusAC = (todoId: string, taskId: string, status: boolean) => ({
    type: `CHANGE-TASK-STATUS`,
    todoId,
    taskId,
    status,
} as const)

export type ChangeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>
export type AddTaskACType = ReturnType<typeof addTaskAC>
export type DeleteTaskACType = ReturnType<typeof deleteTaskAC>
export type TaskActionsType = AddTaskACType
    | RemoveTodolistACType
    | DeleteTaskACType
    | ChangeTaskStatusACType
    | AddTodolistACType