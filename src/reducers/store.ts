import {combineReducers, createStore} from "redux";
import {newsfeedReducer} from "./newsfeed-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";


export type AppStateType = ReturnType<typeof reducers>;

const reducers = combineReducers({
    newsfeedPage: newsfeedReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export type AppStoreType = typeof store;
export const store = createStore(reducers);


// @ts-ignore
window.store = store;