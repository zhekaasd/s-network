import {connect} from "react-redux";
import {AppStateType} from "../../reducers/store";
import {Dispatch} from "redux";
import {addMessage, updateMessageText} from "../../reducers/dialogs-reducer";
import ChatPage from "./ChatPage";


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

const ChatPageContainer = connect<MSTPType, MDTPType, {}, AppStateType>(mstp, mdtp)(ChatPage);

export default ChatPageContainer;