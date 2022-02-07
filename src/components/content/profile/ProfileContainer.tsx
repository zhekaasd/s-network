
import {AppStateType} from "../../../reducers/store";
import {connect} from "react-redux";
import {addPost, updatePostText} from "../../../reducers/newsfeed-reducer";
import {Profile} from "./Profile";

type MDTPType = {
    addPost: () => void
    updatePostText: (value: string) => void
}
type MSTPType = ReturnType<typeof mstp>;
const mstp = (state: AppStateType) => {
    return {
        actualPostText: state.newsfeedPage.actualPostText,
        posts: state.newsfeedPage.posts.filter(p => p.value),
        avatar: 'true'
    }
}

export default connect<MSTPType, MDTPType, {}, AppStateType>(mstp, {
    addPost,
    updatePostText
})(Profile);