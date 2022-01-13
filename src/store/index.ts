import { applyMiddleware, createStore, Store } from "redux";
import { ToDoStates } from "./ducks/todos/types";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./ducks/rootReducer";
import rootSagas from "./ducks/rootSagas";

export interface AplicationState{
  todos: ToDoStates
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<AplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas)

export default store;