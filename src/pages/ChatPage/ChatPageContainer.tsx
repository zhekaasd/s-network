import {connect} from "react-redux";
import {AppStateType} from "../../reducers/store";
import {compose, Dispatch} from "redux";
import {addMessage, updateMessageText} from "../../reducers/dialogs-reducer";
import ChatPage from "./ChatPage";
import withRedirect from "../../HOC/Redirect/withRedirect";
import React from "react";


type MSTPType = ReturnType<typeof mstp>;

const mstp = (state: AppStateType) => {
    return {
        messagesPage: state.dialogsPage,
        profile: state.profilePage.profile
    }
}

type MDTPType = ReturnType<typeof mdtp>;

const mdtp = (dispatch: Dispatch) => {
    return {
        addMessage() {
            dispatch(addMessage());
        },
        updateMessageText(value: string) {
            dispatch(updateMessageText(value))
        }
    }
}


export default compose<React.ComponentType>(
    connect<MSTPType, MDTPType, {}, AppStateType>(mstp, mdtp),
    withRedirect
)(ChatPage);