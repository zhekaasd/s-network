import {AppStateType} from "../../reducers/store";
import {connect, useSelector} from "react-redux";
import {addPost, PostType, updatePostText} from "../../reducers/newsfeed-reducer";
import React, {useEffect} from "react";
import {ProfilePage} from "./ProfilePage";
import {useParams} from "react-router-dom";
import {setUserProfile} from "../../reducers/profile-reducer";
import withRedirect from "../../HOC/Redirect/withRedirect";
import {compose} from "redux";

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
    }
}

type PCI = {
    addPost: () => void
    updatePostText: (value: string) => void
    actualPostText: string
    posts: PostType[]

    setUserProfile: (id: number) => void
}


const ProfilePageContainer: React.FC<PCI> = (props) => {

    let authUserId = useSelector((state: AppStateType) => state.auth.id) as number;

    let paramsId = useParams().id;
    let id = Number(paramsId);

    if(!id || null) {
        id = authUserId
    }


    useEffect(() => {
        props.setUserProfile(id);
    }, []);


        return <ProfilePage posts={props.posts} actualPostText={props.actualPostText}
                            addPost={props.addPost} updatePostText={props.updatePostText}

        />
}



export default compose<React.ComponentType>(
    connect<MSTPType, MDTPType, {}, AppStateType>(mstp, {
        addPost,
        updatePostText, setUserProfile
    }),
    withRedirect
)(ProfilePageContainer)