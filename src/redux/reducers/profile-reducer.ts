import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../../dal/api";
import {getRandomBackgroundBanner, getRandomLocationCity} from "../../utils/utils";
import {FakeLocationBannerUserType} from "../../utils/fakeLocationData";


const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS_PROFILE = 'SET-STATUS-PROFILE';
const UPDATE_STATUS_PROFILE = 'UPDATE-STATUS-PROFILE';

export type ProfileUserType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    },
}

/*--- User profile with fake location ---*/
export type ProfileUserWithFakeLocationType = ProfileUserType & FakeLocationBannerUserType;


export type ActionsType2 = SetUserProfile | SetStatusProfileType | UpdateStatusProfileType;

export type InitialStateProfileType = {
    profile: ProfileUserWithFakeLocationType | null
    status: string
}

const initialState: InitialStateProfileType = {
    profile: null,
    status: ''
}

export const profileReducer = (state: InitialStateProfileType = initialState, action: ActionsType2): InitialStateProfileType => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {...state, profile: {...action.profile}}
        }

        case SET_STATUS_PROFILE: {
            return {...state, status: action.status}
        }


        default:
            return state;
    }
}

type SetUserProfile = { type: typeof SET_USER_PROFILE, profile: ProfileUserWithFakeLocationType};
export const setUserProfileAC = (profile: ProfileUserWithFakeLocationType): SetUserProfile => {
    return { type: SET_USER_PROFILE, profile }
}


export const setUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getUserProfile(userId)
        .then((response) => {
/*---get user data from server, changed type item, add fake location ---*/
            let data = {
                ...response.data,
                contacts: {...response.data.contacts},
                photos: {...response.data.photos},
                locationUser: getRandomLocationCity(),
                backgroundBanner: getRandomBackgroundBanner()
            }


            dispatch(setUserProfileAC(data));

        });
}

type SetStatusProfileType = {type: typeof SET_STATUS_PROFILE, status: string}
export const setStatusProfile = (status: string): SetStatusProfileType => {
    return {type: SET_STATUS_PROFILE, status}
}

export const getStatusProfile = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatusProfile(userId)
        .then((response) => {

            dispatch(setStatusProfile(response.data))
        })
}


type UpdateStatusProfileType = { type: typeof UPDATE_STATUS_PROFILE, status: string }
const updateStatusProfile = (status: string): UpdateStatusProfileType => {
    return { type: UPDATE_STATUS_PROFILE, status }
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatusProfile(status)
        .then((response) => {
            if(response.data.resultCode === 0) {
                dispatch(setStatusProfile(status))
            }
        })
}