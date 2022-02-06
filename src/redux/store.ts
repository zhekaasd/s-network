import {combineReducers, createStore} from "redux";
import {newsfeedReducer} from "../reducers/newsfeed-reducer";
import {dialogsReducer} from "../reducers/dialogs-reducer";


export type AppStateType = ReturnType<typeof reducers>;

const reducers = combineReducers({
    newsfeed: newsfeedReducer,
    dialogs: dialogsReducer
})

export type AppStoreType = typeof store;
export const store = createStore(reducers);


// @ts-ignore
window.store = store;