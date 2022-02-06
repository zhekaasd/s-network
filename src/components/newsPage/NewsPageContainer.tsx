import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import {addPost, updatePostText} from "../../reducers/newsfeed-reducer";
import NewsPage from "./NewsPage";


type MDTPType = ReturnType<typeof mapDispatchToProps>;

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost() {
            dispatch(addPost());
        },
        updatePostText(value: string) {
            dispatch(updatePostText(value));
        }
    }
}

type MSTPType = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: AppStateType) => {
    return {
        newsfeedPage: state.newsfeed
    }
}

export default connect<MSTPType, MDTPType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(NewsPage);