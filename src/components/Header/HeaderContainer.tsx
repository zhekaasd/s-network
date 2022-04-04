import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../reducers/store";
import {authAPI} from "../../dal/api";
import { authUserProfile } from "../../reducers/auth-reducer";

interface HCI {
    login: string | null
    authUserProfile: () => void
    isAuth: boolean
}
class HeaderContainer extends React.Component<HCI, any>{

    componentDidMount() {
        this.props.authUserProfile();
    }

    render() {
        return <Header {...this.props}  />
    }
}


type MDTPType = {
    authUserProfile: () => void
}

type MSTPType = {
    login: string | null
    isAuth: boolean
}

const mstp = (state: AppStateType): MSTPType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect<MSTPType, MDTPType, {}, AppStateType>(mstp, {
    authUserProfile
})(HeaderContainer);

