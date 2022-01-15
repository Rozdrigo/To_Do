import { Reducer } from "redux";
import { ToDoStates, ToDoTypes } from "./types"; 

const INITIAL_STATE: ToDoStates = {
    notes: [],
    error: true,
    loading: false
}

const reducer: Reducer<ToDoStates> = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case ToDoTypes.LOAD_REQUEST:
            return { ...state, loading: true }
        case ToDoTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, notes: action.payload.notes }
        case ToDoTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, notes: [] }
        default:
            return state;
    }
}

export default reducer