import {Dispatch} from "redux";
import {usersAPI} from "../dal/api";
import {
    FakeLocationBannerUserType,
    getRandomBackgroundBanner,
    getRandomLocationCity
} from "../fakeLocation/fakeLocation";

const SET_USERS = 'SET-USERS';
const TOGGLE_USER = 'TOGGLE-USER';
const SET_TOTAL_USERS  = 'SET-TOTAL-USERS';
const CHANGE_CURRENT_PAGE  = 'CHANGE-CURRENT-PAGE';
const TOGGLE_IS_FETCHING  = 'TOGGLE-IS-FETCHING';
const FOLLOWING_IN_PROGRESS  = 'FOLLOWING-IN-PROGRESS';

export type User = {
    name: string,
    id: number,
    uniqueUrlName: string,
    photos: {
        small: string,
        large: string
    },
    status: string,
    followed: boolean,
}

/*--- User profile with fake location ---*/
export type UserWithFakeLocation = User & FakeLocationBannerUserType;


type ActionsType = SetUsersType | FollowingToggleType | SetTotalUsersType
    | ChangeCurrentPageType | ToggleIsFetchingType | toggleIsFollowingInProgressType;

export type InitialStateUsersType = {
    users: UserWithFakeLocation[]
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isFetching: boolean,
    followingInProgress: number[]
}


const initialState: InitialStateUsersType = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 20,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: InitialStateUsersType = initialState, action: ActionsType): InitialStateUsersType => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state, users: [...action.users]
            }
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

        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        }


        default:
            return state;
    }
}


type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UserWithFakeLocation>
}
export const setUsers = (users: UserWithFakeLocation[]): SetUsersType => {
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
    return { type: TOGGLE_IS_FETCHING, isFetching}
}

type toggleIsFollowingInProgressType = {
    type: typeof FOLLOWING_IN_PROGRESS
    isFetching: boolean
    id: number
}

export const toggleIsFollowingInProgress = (isFetching: boolean, id: number): toggleIsFollowingInProgressType => {
    return { type: FOLLOWING_IN_PROGRESS, isFetching, id }
}


export const changePageNumberUsers = (pageNumber: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.changeNumberPage(pageNumber, pageSize)
            .then((resp) => {
/*---get user data from server, changed type item, add fake location ---*/
                let data = [...resp.data.items.map( (u: User) => ({
                    ...u,
                    locationUser: getRandomLocationCity(),
                    backgroundBanner: getRandomBackgroundBanner()
                }))];

                dispatch(toggleIsFetching(false));
                dispatch(changeCurrentPage(pageNumber));
                dispatch(setUsers(data));
            })
    }
}


export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true)); debugger
    usersAPI.getUsers(currentPage, pageSize)
        .then((resp) => { debugger
/*---get user data from server, changed type item, add fake location ---*/
            let data = [...resp.data.items.map( (u: User[]) => ({
                ...u,
                locationUser: getRandomLocationCity(),
                backgroundBanner: getRandomBackgroundBanner()
            }))];

            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data));
            dispatch(setTotalUsers(resp.data.totalCount));
        })
}


export const followUser = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingInProgress(true, userId));
    usersAPI.followUser(userId)
        .then((response) => {
            if(response.data.resultCode === 0) {
                dispatch(followingToggle(userId));
                dispatch(toggleIsFollowingInProgress(false, userId));
            }
        })
}


export const unfollowUser = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingInProgress(true, userId));
    usersAPI.unfollowUser(userId)
        .then((response) => {
            if(response.data.resultCode === 0) {
                dispatch(followingToggle(userId));
                dispatch(toggleIsFollowingInProgress(false, userId));
            }
        })
}