import {connect} from "react-redux";
import {AppStateType} from "../../reducers/store";
import {compose, Dispatch} from "redux";
import {addPost} from "../../reducers/newsfeed-reducer";
import HomePage from "./HomePage";
import {ComponentType} from "react";


type MDTPType = ReturnType<typeof mapDispatchToProps>;

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost(value: string) {
            dispatch(addPost(value));
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

    return <HomePage newsfeedPage={props.newsfeedPage} addPost={props.addPost} />
}


export default compose<ComponentType>(
    connect<MSTPType, MDTPType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    /*withRedirect*/
)(HomePageContainer)