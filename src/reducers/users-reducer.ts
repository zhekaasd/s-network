
const SET_USERS = 'SET-USERS';
const TOGGLE_USER = 'TOGGLE-USER';
const SET_TOTAL_USERS  = 'SET-TOTAL-USERS';
const CHANGE_CURRENT_PAGE  = 'CHANGE-CURRENT-PAGE';
const TOGGLE_IS_FETCHING  = 'TOGGLE-IS-FETCHING';

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

type ActionsType = SetUsersType | FollowingToggleType | SetTotalUsersType | ChangeCurrentPageType | ToggleIsFetchingType;
type InitialStateType = {
    users: User[]
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isFetching: boolean
}

const initialState: InitialStateType = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 20,
    isFetching: false
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }

        case TOGGLE_USER: {
            // let stateCopy = {...state,
            //     ...state.users,
            //     users: state.users.map(u => u.id === action.id ? {...u, followed: !u.followed} : u)
            // }

            return {...state,
                ...state.users,
                users: state.users.map(u => u.id === action.id ? {...u, followed: !u.followed} : u)
            }
        }

        case SET_TOTAL_USERS: {
            return {...state, totalUsersCount: action.value}
        }

        case CHANGE_CURRENT_PAGE: {
            return {...state, currentPage: action.page}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
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

type SetTotalUsersType = {
    type: typeof SET_TOTAL_USERS
    value: number
}

export const setTotalUsers = (value: number): SetTotalUsersType => {
    return { type: SET_TOTAL_USERS, value }
}

type ChangeCurrentPageType = {
    type: typeof CHANGE_CURRENT_PAGE
    page: number
}

export const changeCurrentPage = (page: number): ChangeCurrentPageType => {
    return { type: CHANGE_CURRENT_PAGE, page }
}

type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}