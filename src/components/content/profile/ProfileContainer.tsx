
import {AppStateType} from "../../../redux/store";
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
        actualPostText: state.newsfeed.actualPostText,
        posts: state.newsfeed.posts.filter(p => p.value),
        avatar: 'true'
    }
}

export default connect<MSTPType, MDTPType, {}, AppStateType>(mstp, {
    addPost,
    updatePostText
})(Profile);