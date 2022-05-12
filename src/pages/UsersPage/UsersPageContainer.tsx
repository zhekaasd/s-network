import {connect} from "react-redux";
import {
    changePageNumberUsers,
    followUser,
    getUsers,
    unfollowUser,
    UserWithFakeLocation
} from "../../redux/reducers/users-reducer";
import UsersPage from "./UsersPage";
import {AppStateType} from "../../redux/store/store";


type MDTPType = {
    getUsers: (currentPage: number, pageSize: number) => void
    changePageNumberUsers: (pageNumber: number, pageSize: number) => void
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}

type MSTPType = {
    usersPage: {
        users: UserWithFakeLocation[],
        currentPage: number
        totalUsersCount: number
        pageSize: number
        isFetching: boolean
    }
    followingInProgress: number[]
}

const mapStateToProps = (state: AppStateType): MSTPType => {
    return {
        usersPage: state.usersPage,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect<MSTPType, MDTPType, {}, AppStateType>(mapStateToProps, {
    getUsers, followUser, unfollowUser, changePageNumberUsers
})(UsersPage);