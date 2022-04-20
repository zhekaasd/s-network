import {connect} from "react-redux";
import {AppStateType} from "../../reducers/store";
import {compose, Dispatch} from "redux";
import {addPost, updatePostText} from "../../reducers/newsfeed-reducer";
import HomePage from "./HomePage";
import withRedirect from "../../HOC/Redirect/withRedirect";
import {ComponentType} from "react";


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
        newsfeedPage: state.newsfeedPage,
        isAuth: state.auth.isAuth
    }
}

const HomePageContainer = (props: MSTPType & MDTPType) => {

    return <HomePage newsfeedPage={props.newsfeedPage} addPost={props.addPost} updatePostText={props.updatePostText} />
}


export default compose<ComponentType>(
    connect<MSTPType, MDTPType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    withRedirect
)(HomePageContainer)