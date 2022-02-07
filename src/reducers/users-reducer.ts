
const SET_USERS = 'SET-USERS';
const TOGGLE_USER = 'TOGGLE-USER';

export type User = {
    name: string,
    id: number,
    uniqueUrlName: string,
    photos: {
        small: string,
        large: string
    },
    status: string,
    followed: boolean
}

type ActionsType = SetUsersType | FollowingToggleType;
type InitialStateType = {
    users: User[]
}

const initialState: InitialStateType = {
    users: []
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }

        case TOGGLE_USER: {
            let stateCopy = {...state,
                ...state.users,
                users: state.users.map(u => u.id === action.id ? {...u, followed: !u.followed} : u)
            }

            return stateCopy;
        }

        default:
            return state;
    }
}


type SetUsersType = {
    type: typeof SET_USERS
    users: Array<User>
}
export const setUsers = (users: User[]): SetUsersType => {
    return {type: SET_USERS, users}
}

type FollowingToggleType = {
    type: typeof TOGGLE_USER
    id: number
}
export const followingToggle = (id: number): FollowingToggleType => {
    return {type: TOGGLE_USER, id}
}

