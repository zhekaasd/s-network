import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../reducers/store";
import {authUserProfile, AuthUserProfileWithFakeLocation} from "../../reducers/auth-reducer";

interface HCI {
    login: string | null
    authUserProfile: () => void
    isAuth: boolean
    id: number | null
    profile: AuthUserProfileWithFakeLocation | null
}
class HeaderContainer extends React.Component<HCI, any>{


    componentDidMount() {

        this.props.authUserProfile();

        console.log('Header Container: ' + this.props.id);
    }


// /*--- set profile after verification authorized ---*/
//     componentDidUpdate(prevProps: Readonly<HCI>, prevState: Readonly<any>) {
//             if (this.props !== prevProps) {
//                 this.props.setUserProfile(this.props.id as number);
//             }
//
//     }



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
    id: number | null
    profile: AuthUserProfileWithFakeLocation | null
}

const mstp = (state: AppStateType): MSTPType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        id: state.auth.id,
        profile: state.auth.profile
    }
}

export default connect<MSTPType, MDTPType, {}, AppStateType>(mstp, {
    authUserProfile
})(HeaderContainer);

