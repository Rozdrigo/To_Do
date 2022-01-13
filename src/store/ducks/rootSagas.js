import { all, takeLatest } from "redux-saga/effects";

import { ToDoTypes } from "./todos/types";
import { load } from "./todos/sagas";

export default function* rootSagas (){
    return yield all([
        takeLatest(ToDoTypes.LOAD_REQUEST, load),
    ]);
}