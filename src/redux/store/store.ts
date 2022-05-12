import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

import { reducer as formReducer } from 'redux-form';
import { newsfeedReducer } from "../reducers/newsfeed-reducer";
import { chatReducer } from "../reducers/chat-reducer";
import { usersReducer } from "../reducers/users-reducer";
import { profileReducer } from "../reducers/profile-reducer";
import { authReducer } from "../reducers/auth-reducer";
import { weatherReducer } from "../reducers/weather-reducer";
import { appReducer } from "../reducers/app-reducer";


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