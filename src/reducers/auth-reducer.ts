import {Dispatch} from "redux";
import {authAPI} from "../dal/api";

const AUTH_USER_PROFILE = 'AUTH-USER-PROFILE';

type InitialAuthStateType = {
    login: string | null
    id: string | null
    email: string | null
    isAuth: boolean
}

type ActionsType = AuthUserProfileType;

const initialAuthState: InitialAuthStateType = {
    login: null,
    id: null,
    email: null,
    isAuth: false
}

export const authReducer = (state:InitialAuthStateType = initialAuthState, action: ActionsType): InitialAuthStateType => {
    switch (action.type) {
        case AUTH_USER_PROFILE: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}


type AuthUserProfileType = {
    type: typeof AUTH_USER_PROFILE
    data: {login: string, id: string, email: string}
}

const authUserProfileAC = (login: string, id: string, email: string): AuthUserProfileType => {
    return {type: AUTH_USER_PROFILE, data: {email, id, login} }
}


export const authUserProfile = () => {
    return (dispatch: Dispatch) => {
        authAPI.auth()
            .then((response) => {
                if(response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data;
                    dispatch(authUserProfileAC(login, email, id));
                }
            })
    }
}