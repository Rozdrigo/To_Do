import { action } from 'typesafe-actions';
import { ToDoTypes, ToDos } from './types';

export const loadRequest = () => action(ToDoTypes.LOAD_REQUEST);
export const loadSuccess = (data: ToDos[] ) => action(ToDoTypes.LOAD_SUCCESS, data);
export const loadFailure = () => action(ToDoTypes.LOAD_FAILURE);
