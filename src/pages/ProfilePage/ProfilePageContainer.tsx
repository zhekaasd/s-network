import {AppStateType} from "../../reducers/store";
import {connect} from "react-redux";
import {addPost, PostType, updatePostText} from "../../reducers/newsfeed-reducer";
import React from "react";
import {ProfilePage} from "./ProfilePage";

type MDTPType = {
    addPost: () => void
    updatePostText: (value: string) => void
}
type MSTPType = ReturnType<typeof mstp>;
const mstp = (state: AppStateType) => {
    return {
        actualPostText: state.newsfeedPage.actualPostText,
        posts: state.newsfeedPage.posts.filter(p => p.value),
        avatar: 'true',
    }
}

type PCI = {
    addPost: () => void
    updatePostText: (value: string) => void
    actualPostText: string
    posts: PostType[]
    avatar: string
}


const ProfilePageContainer: React.FC<PCI> = (props) => {

        return <ProfilePage posts={props.posts} actualPostText={props.actualPostText} avatar={props.avatar}
                            addPost={props.addPost} updatePostText={props.updatePostText}

        />
}

export default connect<MSTPType, MDTPType, {}, AppStateType>(mstp, {
    addPost,
    updatePostText,
})(ProfilePageContainer);