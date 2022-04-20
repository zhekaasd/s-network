import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../dal/api";
import {ProfileUserType} from "./profile-reducer";
import {
    FakeLocationBannerUserType,
    getRandomBackgroundBanner,
    getRandomLocationCity
} from "../fakeLocation/fakeLocation";

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
                ...action.data,
                isAuth: true
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
    data: {login: string, id: number, email: string}
}

export const authUserProfileAC = (login: string, id: number, email: string): AuthUserProfileType => {
    return {type: AUTH_USER_PROFILE, data: {email, id, login} }
}

type SetAuthUserProfile = {
    type: typeof SET_AUTH_USER_PROFILE
    profile: AuthUserProfileWithFakeLocation
}
export const setAuthUserProfile = (profile: AuthUserProfileWithFakeLocation): SetAuthUserProfile => {
    return {type: SET_AUTH_USER_PROFILE, profile}
}

export const authUserProfile = () => {
    return (dispatch: Dispatch) => {
        authAPI.auth()
            .then((response) => {

                if(response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data;
                    dispatch(authUserProfileAC(login, id, email));
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

                            dispatch(setAuthUserProfile(data));
                        });
                }
            })
    }
}