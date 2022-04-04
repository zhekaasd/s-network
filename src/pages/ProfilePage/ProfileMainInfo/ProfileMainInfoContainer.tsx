import {AppStateType} from "../../../reducers/store";
import {connect} from "react-redux";
import {ProfileMainInfo} from "./ProfileMainInfo";
import React, {useEffect} from "react";
import {ProfileUserType, setUserProfile} from "../../../reducers/profile-reducer";
import {useParams} from "react-router-dom";

type MDTPType = {
    setUserProfile: (id: number) => void
}
type MSTPType = ReturnType<typeof mstp>;
const mstp = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

type CCType = {
    setUserProfile: (id: number) => void
    profile: ProfileUserType | null

}

const ProfileMainInfoContainer: React.FC<CCType> = (props) => {

    let id = Number(useParams().id);



    useEffect(() => {
        if (!id) {
            id = 9008;
        }

        props.setUserProfile(id);
    }, []);


        return <ProfileMainInfo profile={props.profile} />
}

export default connect<MSTPType, MDTPType, {}, AppStateType>(mstp, {setUserProfile})(ProfileMainInfo);