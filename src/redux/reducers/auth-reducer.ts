import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../dal/api";
import {ProfileUserType} from "./profile-reducer";
import {
    FakeLocationBannerUserType,
    getRandomBackgroundBanner,
    getRandomLocationCity
} from "../fakeLocation/fakeLocation";
import { stopSubmit } from "redux-form";

const AUTH_USER_PROFILE = 'AUTH-USER-PROFILE';
const SET_AUTH_USER_PROFILE = 'SET-AUTH-USER-PROFILE';

export type InitialAuthStateType = {
    login: string | null
    id: number | null
    email: string | null
    isAuth: boolean
    profile: AuthUserProfileWithFakeLocation | null
}

/*--- User profile with fake location ---*/
export type AuthUserProfileWithFakeLocation = ProfileUserType & FakeLocationBannerUserType;

type ActionsType = AuthUserProfileType | SetAuthUserProfile ;

const initialAuthState: InitialAuthStateType = {
    login: null,
    id: null,
    email: null,
    isAuth: false,
    profile: null
}

export const authReducer = (state:InitialAuthStateType = initialAuthState, action: ActionsType): InitialAuthStateType => {
    switch (action.type) {
        case AUTH_USER_PROFILE: {
            return {
                ...state,
                ...action.payload
            }
        }

        case SET_AUTH_USER_PROFILE: {
            return {
                ...state,
                profile: {
                    ...action.profile,
                }
            }
        }

        default:
            return state;
    }
}


type AuthUserProfileType = {
    type: typeof AUTH_USER_PROFILE
    payload: {login: string | null, id: number | null, email: string | null, isAuth: boolean}
}

export const authUserProfileAC = (login: string | null, id: number | null, email: string | null, isAuth: boolean): AuthUserProfileType => {
    return {type: AUTH_USER_PROFILE, payload: {email, id, login, isAuth} }
}

type SetAuthUserProfile = {
    type: typeof SET_AUTH_USER_PROFILE
    profile: AuthUserProfileWithFakeLocation
}
export const setAuthUserProfileAC = (profile: AuthUserProfileWithFakeLocation): SetAuthUserProfile => {
    return {type: SET_AUTH_USER_PROFILE, profile}
}

export const authUserProfile = () => {
    return (dispatch: any) => {
        return authAPI.auth()
            .then((response) => {

                if(response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data;
                    dispatch(authUserProfileAC(login, id, email, true));
/*                    usersAPI.getUserProfile(id)
                        .then((response) => {

                            /!*---get user data from server, changed type item, add fake location ---*!/
                            let data = {
                                ...response.data,
                                contacts: {...response.data.contacts},
                                photos: {...response.data.photos},
                                locationUser: getRandomLocationCity(),
                                backgroundBanner: getRandomBackgroundBanner()
                            }

                            dispatch(setAuthUserProfile(data));
                        });*/

                    dispatch(setAuthUserProfile(id));
                }
            })
    }
};

export const setAuthUserProfile = (id: number) => (dispatch: Dispatch) => {
    usersAPI.getUserProfile(id)
        .then((response) => {

            /*---get user data from server, changed type item, add fake location ---*/
            let data = {
                ...response.data,
                contacts: {...response.data.contacts},
                photos: {...response.data.photos},
                locationUser: getRandomLocationCity(),
                backgroundBanner: getRandomBackgroundBanner()
            }

            dispatch(setAuthUserProfileAC(data));
        });
}


export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(authUserProfile());
            } else {
                let action = stopSubmit('login', {_error: response.data.messages[0]});
                dispatch(action);
            }
        })
};

export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then((response) => {
            if(response.data.resultCode === 0) {
                dispatch(authUserProfileAC(null, null, null, false));
            }
        })
}