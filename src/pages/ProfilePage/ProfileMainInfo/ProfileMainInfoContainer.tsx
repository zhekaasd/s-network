import {AppStateType} from "../../../reducers/store";
import {connect} from "react-redux";
import {ProfileMainInfo} from "./ProfileMainInfo";
import React from "react";
import {ProfileUserWithFakeLocationType, setUserProfile} from "../../../reducers/profile-reducer";

type MDTPType = {
    setUserProfile: (id: number) => void
}
type MSTPType = ReturnType<typeof mstp>;
const mstp = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
}

type ProfileMainInfoContainerPropsType = {
    setUserProfile: (id: number) => void
    profile: ProfileUserWithFakeLocationType | null
}

const ProfileMainInfoContainer: React.FC<ProfileMainInfoContainerPropsType> = (props) => {

        return <ProfileMainInfo profile={props.profile} />
}

export default connect<MSTPType, MDTPType, {}, AppStateType>(mstp, {setUserProfile})(ProfileMainInfoContainer);