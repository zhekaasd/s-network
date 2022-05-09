import {AppStateType} from "../../reducers/store";
import {connect, useSelector} from "react-redux";
import {addPost, updatePostText} from "../../reducers/newsfeed-reducer";
import React, {useEffect} from "react";
import {ProfilePage} from "./ProfilePage";
import {useParams} from "react-router-dom";
import {getStatusProfile, setUserProfile, updateStatus} from "../../reducers/profile-reducer";
import {compose} from "redux";

type MDTPType = {
    addPost: () => void
    updatePostText: (value: string) => void
    setUserProfile: (id: number) => void
    getStatusProfile: (userId: number) => void
    updateStatus: (status: string) => void
}
type MSTPType = ReturnType<typeof mstp>;
const mstp = (state: AppStateType) => {
    return {
        actualPostText: state.newsfeedPage.actualPostText,
        posts: state.newsfeedPage.posts.filter(p => p.value),
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
}

type ProfilePageContainerType = MSTPType & MDTPType;


const ProfilePageContainer: React.FC<ProfilePageContainerType> = (props) => {

    let authUserId = useSelector((state: AppStateType) => state.auth.id) as number;

    let paramsId = useParams().id;
    let id = Number(paramsId);

    if(!id || null) {
        id = authUserId
    }


    useEffect(() => {
        props.setUserProfile(id);
        props.getStatusProfile(id);

    }, []);



        return <ProfilePage posts={props.posts} actualPostText={props.actualPostText} updateStatus={props.updateStatus}
                            addPost={props.addPost} updatePostText={props.updatePostText}
                            profile={props.profile} status={props.status} isAuth={props.isAuth}

        />
}



export default compose<React.ComponentType>(
    connect<MSTPType, MDTPType, {}, AppStateType>(mstp, {
        addPost,
        updatePostText, setUserProfile, getStatusProfile, updateStatus
    }),
    // withRedirect
)(ProfilePageContainer)