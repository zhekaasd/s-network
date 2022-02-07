
import s from "./Users.module.scss"
import {AppStateType} from "../../reducers/store";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followingToggle, setUsers, User} from "../../reducers/users-reducer";


// type MSTPType = ReturnType<typeof mstp>;
// type MSTPType2 = {
//     users: User[]
// }

type MDTPType = {
    setUsers: (users: User[]) => void
    followingToggle: (id: number) => void
}

type MSTPType = {
    users: Array<User>
}
const mapStateToProps = (state: AppStateType): MSTPType => {
    return {
        users: state.usersPage.users
    }
}



export default connect<MSTPType, MDTPType, {}, AppStateType>(mapStateToProps, {
    setUsers,
    followingToggle
})(Users);