import React, {useEffect, useRef} from "react";
import {NavLink} from "react-router-dom";
import {ProfileUserWithFakeLocationType} from "../../reducers/profile-reducer";
import MUIAddItemForm from "../../components/common/AddItemForm/MUIAddItemForm";
import InputCustom from "../../components/accets/components/input/InputCustom";

/*--- css import ---*/
import s from "./ChatPage.module.scss";
import photo from "../../other/images/1920x.webp";
import {PATH} from "../../components/RoutesComponent/RoutesComponent";
import {Line} from "../../components/common/Line/Line";
import {MessageType, UserType} from "../../reducers/chat-reducer";


function ChatPage(props: {
    messagesPage: {
        messages: Array<MessageType>,
        users: Array<UserType>,
        actualMessageText: string
    }
    addMessage: (value: string) => void,
    updateMessageText: (value: string) => void
    profile: ProfileUserWithFakeLocationType | null
})
{

    const bottomRef: any = useRef();

    useEffect(() => {
        bottomRef.current.scrollIntoView({block:'start'});
    },[props.messagesPage.messages]);


    let userSentMessageFilter = props.messagesPage.messages.filter(m => !m.value);
    let lastMessage = userSentMessageFilter[userSentMessageFilter.length - 1].messageText;


    const submit = (formData: any) => {
        props.addMessage(formData.value);
        console.log(formData);
    }

    return <div>

{/*--- Messages list ---*/}
        <div className={s.chatPageContainer}>
            <div className={s.chatPageDialogsBlock}>
                <div className={s.chatPageSearchBlock}>
                    <InputCustom widthField typeField={'outlined'} sizeField={'small'} />
                </div>

                {props.messagesPage.users.map(u => <NavLink
                    key={u.id}
                    className={({isActive}) => isActive ? s.chatPageDialogsItem + ' ' + s.active : s.chatPageDialogsItem}
                    to={PATH.MESSAGES + '/' + u.id}>

                    <img src={photo} alt=""/>

                    <div className={s.chatPageDialogsItemInfo}>

                        <div className={s.chatPageDialogsItemDetailsInfo}>
                            <h3>{u.firstName} {u.lastName}</h3>
                            <p>{lastMessage}</p>
                        </div>

                        <span>{new Date().getHours() + ':' + new Date().getMinutes()}</span>
                    </div>
                </NavLink>)}

            </div>

            <div className={s.chatPageMessagesBlock}>
                <div className={s.userName}>
                    <div className={s.mData}>
                        <h3>John Doe</h3>
                        <span>online</span>
                    </div>
                    <div>
                        <span>last seen within a mount</span>
                    </div>
                </div>

                <Line />
{/*--- Messages list ---*/}
                <div className={s.messagesList}>
                    {
                        props.messagesPage.messages.map(m => <p key={m.id} ref={bottomRef}
                                                                className={m.value ? s.yourSentMessage : s.userSentMessage}>{m.messageText}</p>)
                    }
                </div>

                <Line />
{/*--- Add text message form ---*/}
                <div className={s.addItemForm}>
  {/*                  <MUIAddItemForm onClick={props.addMessage}
                                    onChange={props.updateMessageText}
                                    value={props.messagesPage.actualMessageText}
                                    classNameCustom={s.customAddItemForm}
                                    childrenButton={'➤'}
                    />*/}

                    <MUIAddItemForm onSubmit={submit} />
                </div>

            </div>
        </div>
    </div>
}

export default ChatPage;


