import {Dispatch} from "redux";
import {usersAPI} from "../dal/api";
import {
    FakeLocationBannerUserType,
    getRandomBackgroundBanner,
    getRandomLocationCity
} from "../fakeLocation/fakeLocation";


const SET_USER_PROFILE = 'SET-USER-PROFILE';

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
    }
}

/*--- User profile with fake location ---*/
export type ProfileUserWithFakeLocationType = ProfileUserType & FakeLocationBannerUserType;


type ActionsType = SetUserProfile;
export type InitialStateProfileType = {
    profile: ProfileUserWithFakeLocationType | null
}

const initialState: InitialStateProfileType = {
    profile: null
}

export const profileReducer = (state: InitialStateProfileType = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {...state, profile: {...action.profile}}
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

