import {connect} from "react-redux";
import {AppStateType} from "../../redux/store/store";
import {compose, Dispatch} from "redux";
import {addMessage} from "../../redux/reducers/chat-reducer";
import ChatPage from "./ChatPage";
import React from "react";
import withRedirect from "../../hocs/Redirect/withRedirect";


type MapStatePropsType = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: AppStateType) => {
    return {
        messagesPage: state.dialogsPage,
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

type MapDispatchPropsType = ReturnType<typeof mapDispatchToProps>;

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage(value: string) {
            dispatch(addMessage(value));
        }
    }
}


export default compose<React.ComponentType>(
    withRedirect,
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
)(ChatPage);