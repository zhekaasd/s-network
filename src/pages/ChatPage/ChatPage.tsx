import {MessageType, UserType} from "../../state/store";
import React, {useEffect, useRef} from "react";
import {NavLink} from "react-router-dom";
import {ProfileUserType} from "../../reducers/profile-reducer";
import MUIAddItemForm from "../../components/common/AddItemForm/MUIAddItemForm";
import ProfileMainInfoContainer from "../ProfilePage/ProfileMainInfo/ProfileMainInfoContainer";
import InputCustom from "../../components/accets/input/InputCustom";

/*--- css import ---*/
import s from "./ChatPage.module.scss";
import photo from "../../other/images/1920x.webp";
import Navigation from "../../components/common/Navigation/Navigation";


function ChatPage(props: {
    messagesPage: { messages: Array<MessageType>, users: Array<UserType>, actualMessageText: string}
    addMessage: () => void, updateMessageText: (value: string) => void
    profile: ProfileUserType | null
})
{

    const bottomRef: any = useRef();

    useEffect(() => {
        bottomRef.current.scrollIntoView({block:'start'});
    },[props.messagesPage.messages]);


    let userSentMessageFilter = props.messagesPage.messages.filter(m => !m.value);
    let lastMessage = userSentMessageFilter[userSentMessageFilter.length - 1].messageText;


    return <div>

        <ProfileMainInfoContainer />
        <Navigation />

        <div className={s.chatPageContainer}>
            <div className={s.chatPageDialogsBlock}>
                <div className={s.chatPageSearchBlock}>
                    <InputCustom widthField typeField={'outlined'} sizeField={'small'} />
                </div>

                {props.messagesPage.users.map(u => <NavLink
                    key={u.id}
                    className={({isActive}) => isActive ? s.chatPageDialogsItem + ' ' + s.active : s.chatPageDialogsItem}
                    to={'/messages/' + u.id}>

                    <img src={photo} alt=""/>

                    <div className={s.chatPageDialogsItemInfo}>

                        <div className={s.chatPageDialogsItemDetailsInfo}>
                            <h3>{u.firstName} <span>{u.lastName}</span></h3>
                            <p>{lastMessage}</p>
                        </div>

                        <span>{new Date().getHours() + ':' + new Date().getMinutes()}</span>
                    </div>
                </NavLink>)}

            </div>

            <div className={s.m}>
                <div className={s.userName}>
                    <div className={s.mData}>
                        <p>John Doe</p>
                        <span>online</span>
                    </div>
                    <div>
                        <span>last seen within a mount</span>
                    </div>
                </div>

                <div className={s.messagesList}>
                    {
                        props.messagesPage.messages.map(m => <p key={m.id} ref={bottomRef}
                                                                className={m.value ? s.yourSentMessage : s.userSentMessage}>{m.messageText}</p>)
                    }
                </div>

                <div className={s.addItemForm}>
                    <MUIAddItemForm onClick={props.addMessage}
                                    onChange={props.updateMessageText}
                                    value={props.messagesPage.actualMessageText} />
                </div>

            </div>
        </div>
    </div>
}

export default ChatPage;