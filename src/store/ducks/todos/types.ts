import internal from "stream";

export enum ToDoTypes {
    'LOAD_REQUEST' = "@ToDos/LOAD_REQUEST",
    'LOAD_SUCCESS' = "@ToDos/LOAD_LOAD_SUCCESS",
    'LOAD_FAILURE' = "@ToDos/LOAD_FAILURE",
}

export interface ToDos {
    content: string
    description: string
    id: string
    insertedAt: string
    title: string
    userId: string
}

export interface ToDoStates {
    readonly message?: string,
    readonly notes: ToDos[]
    readonly user?: {
        readonly email: string
        readonly id: string
        readonly insertedAt: string
        readonly name: string
    },
    readonly loading: boolean,
    readonly error: boolean
}