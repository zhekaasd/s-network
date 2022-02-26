
import {AppStateType} from "../../../reducers/store";
import {connect} from "react-redux";
import {addPost, PostType, updatePostText} from "../../../reducers/newsfeed-reducer";
import {Profile} from "./Profile";
import React, {useEffect} from "react";
import {ProfileUserType, setUserProfile} from "../../../reducers/profile-reducer";
import axios from "axios";
import {useParams} from "react-router-dom";

type MDTPType = {
    addPost: () => void
    updatePostText: (value: string) => void
    setUserProfile: (id: number) => void
}
type MSTPType = ReturnType<typeof mstp>;
const mstp = (state: AppStateType) => {
    return {
        actualPostText: state.newsfeedPage.actualPostText,
        posts: state.newsfeedPage.posts.filter(p => p.value),
        avatar: 'true',
        profile: state.profilePage.profile
    }
}

type PCI = {
    addPost: () => void
    updatePostText: (value: string) => void
    setUserProfile: (id: number) => void
    actualPostText: string
    posts: PostType[]
    avatar: string
    profile: ProfileUserType | null

}
const ProfileContainer: React.FC<PCI> = (props) => {

    let id = Number(useParams().id);



    useEffect(() => {
        if (!id) {
            id = 9008;
        }

        props.setUserProfile(id);
    }, []);


        return <Profile posts={props.posts} actualPostText={props.actualPostText}
                        addPost={props.addPost} updatePostText={props.updatePostText}
                        profile={props.profile}

        />
}

export default connect<MSTPType, MDTPType, {}, AppStateType>(mstp, {
    addPost,
    updatePostText,
    setUserProfile
})(ProfileContainer);