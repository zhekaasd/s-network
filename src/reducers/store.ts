import {applyMiddleware, combineReducers, createStore} from "redux";
import {newsfeedReducer} from "./newsfeed-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {profileReducer} from "./profile-reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";


export type AppStateType = ReturnType<typeof reducers>;

const reducers = combineReducers({
    newsfeedPage: newsfeedReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer
})

export type AppStoreType = typeof store;
export const store = createStore(reducers, applyMiddleware(thunk));


// @ts-ignore
window.store = store;