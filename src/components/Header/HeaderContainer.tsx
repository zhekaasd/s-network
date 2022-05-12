import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/reducers/auth-reducer";
import {AppStateType} from "../../redux/store/store";

interface HCI {
    login: string | null
    isAuth: boolean
    id: number | null
    logout: () => void
}

type MapDispatchPropsType = {
    logout: () => void
}

type MapStatePropsType = {
    login: string | null
    isAuth: boolean
    id: number | null
}


class HeaderContainer extends React.Component<HCI, any> {

    render() {
        return <Header {...this.props}  />
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        id: state.auth.id
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    logout
})(HeaderContainer);

