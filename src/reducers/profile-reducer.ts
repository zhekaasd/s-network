

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

type ActionsType = SetUserProfile;
type InitialStateType = {
    profile: ProfileUserType | null
}

const initialState: InitialStateType = {
    profile: null
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {...state, profile: {...action.profile}}
        }

        default:
            return state;
    }
}

type SetUserProfile = { type: typeof SET_USER_PROFILE, profile: ProfileUserType};
export const setUserProfile = (profile: ProfileUserType): SetUserProfile => {
    return { type: SET_USER_PROFILE, profile }
}

