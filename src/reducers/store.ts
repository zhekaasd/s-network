import {applyMiddleware, combineReducers, createStore} from "redux";
import {newsfeedReducer} from "./newsfeed-reducer";
import {chatReducer} from "./chat-reducer";
import {usersReducer} from "./users-reducer";
import {profileReducer} from "./profile-reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";
import {weatherReducer} from "./weather-reducer";
import {appReducer} from "./app-reducer";

import { reducer as formReducer } from 'redux-form';


export type AppStateType = ReturnType<typeof reducers>;

const reducers = combineReducers({
    newsfeedPage: newsfeedReducer,
    dialogsPage: chatReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer,
    weather: weatherReducer,
    form: formReducer,
    app: appReducer
})

export type AppStoreType = typeof store;
export const store = createStore(reducers, applyMiddleware(thunk));


// @ts-ignore
window.store = store;