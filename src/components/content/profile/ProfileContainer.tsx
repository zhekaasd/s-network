
import {AppStateType} from "../../../reducers/store";
import {connect} from "react-redux";
import {addPost, PostType, updatePostText} from "../../../reducers/newsfeed-reducer";
import {Profile} from "./Profile";
import React from "react";
import {ProfileUserType, setUserProfile} from "../../../reducers/profile-reducer";
import axios from "axios";

type MDTPType = {
    addPost: () => void
    updatePostText: (value: string) => void
    setUserProfile: (profile: ProfileUserType) => void
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

interface PCI {
    addPost: () => void
    updatePostText: (value: string) => void
    setUserProfile: (profile: ProfileUserType) => void
    actualPostText: string
    posts: PostType[]
    avatar: string
    profile: ProfileUserType | null

}
class ProfileContainer extends React.Component<PCI, any> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/9008')
            .then((resp) => {
                this.props.setUserProfile(resp.data);
            })
    }

    render() {
        return <Profile posts={this.props.posts} actualPostText={this.props.actualPostText}
                        addPost={this.props.addPost} updatePostText={this.props.updatePostText}
                        profile={this.props.profile}

        />
    }
}

export default connect<MSTPType, MDTPType, {}, AppStateType>(mstp, {
    addPost,
    updatePostText,
    setUserProfile
})(ProfileContainer);