
import s from "./Users.module.scss"
import {AppStateType} from "../../reducers/store";
import {connect} from "react-redux";
import {
    changeCurrentPage,
    followingToggle,
    setTotalUsers,
    setUsers,
    toggleIsFetching,
    User
} from "../../reducers/users-reducer";
import UsersC from "./UsersC";


// type MSTPType = ReturnType<typeof mstp>;
// type MSTPType2 = {
//     users: User[]
// }

type MDTPType = {
    setUsers: (users: User[]) => void
    followingToggle: (id: number) => void
    setTotalUsers: (value: number) => void
    changeCurrentPage: (page: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

type MSTPType = {
    usersPage: {
        users: User[],
        currentPage: number
        totalUsersCount: number
        pageSize: number
        isFetching: boolean
    }
}
const mapStateToProps = (state: AppStateType): MSTPType => {
    return {
        usersPage: state.usersPage
    }
}



export default connect<MSTPType, MDTPType, {}, AppStateType>(mapStateToProps, {
    setUsers, setTotalUsers, changeCurrentPage, followingToggle, toggleIsFetching
})(UsersC);