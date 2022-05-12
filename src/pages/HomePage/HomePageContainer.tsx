import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import HomePage from "./HomePage";
import {ComponentType} from "react";
import {addPost} from "../../redux/reducers/newsfeed-reducer";
import { AppStateType } from "../../redux/store/store";
import withRedirect from "../../hocs/Redirect/withRedirect";


type MapDispatchPropsType = ReturnType<typeof mapDispatchToProps>;

const mapDispatchToProps = (dispatch: Dispatch) => {

    return {
        addPost(value: string) {
            dispatch(addPost(value));
        }
    }
}

type MapStatePropsType = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: AppStateType) => {
    return {
        newsfeedPage: state.newsfeedPage,
        isAuth: state.auth.isAuth
    }
}

const HomePageContainer = (props: MapStatePropsType & MapDispatchPropsType) => {

    return <HomePage newsfeedPage={props.newsfeedPage} addPost={props.addPost} />
}


export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    withRedirect
)(HomePageContainer)