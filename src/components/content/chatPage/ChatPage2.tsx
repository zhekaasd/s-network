import {MessageType, UserType} from "../../../state/store";
import React, {useEffect, useRef} from "react";

import photo from "../../../other/images/1920x.webp";

import s from "./ChatPage2.module.scss";
import Navigation from "../common/navigation/Navigation";
import {AddItemForm} from "../../../AddItemForm";
import {NavLink} from "react-router-dom";
import {ProfileUserType} from "../../../reducers/profile-reducer";
import UserProfile from "../common/UserProfile/UserProfile";


function ChatPage2(props: {
    messagesPage: { messages: Array<MessageType>, users: Array<UserType>, actualMessageText: string}
    addMessage: () => void, updateMessageText: (value: string) => void
    profile: ProfileUserType | null
})
{

    const bottomRef: any = useRef();

    useEffect(() => {
        bottomRef.current.scrollIntoView({block:'start'});
    },[props.messagesPage.messages])

    let userSentMessageFilter = props.messagesPage.messages.filter(m => !m.value);
    let lastMessage = userSentMessageFilter[userSentMessageFilter.length - 1].messageText;

    return <section>

        <UserProfile profile={props.profile} />

        <Navigation/>

        <div>
            <div className={s.container}>
                <div className={s.d}>
                    <div className={s.searchField}>
                        <input type="text"/>
                        <button>search</button>
                        search field
                    </div>

                    {props.messagesPage.users.map(u => <NavLink key={u.id}
                        className={(navDate) => navDate.isActive ? s.item + ' ' + s.active : s.item} to={'/messages/' + u.id}>
                        <img src={photo} alt=""/>
                        <div className={s.dataItem}>
                            <div className={s.infoUser}>
                                <p>{u.firstName + ' ' + u.lastName}</p>
                                <p>{lastMessage}</p>
                            </div>
                            <span>time</span>
                        </div>
                    </NavLink>)}

                </div>

                <div className={s.m}>Messages
                    <div className={s.userName}>
                        <div>
                            <p>John Doe</p>
                            <span >online</span>
                        </div>
                        <div style={{display: "flex"}}>
                            <div><img src="#" alt="icon1"/></div>
                            <div><img src="#" alt="icon2"/></div>
                            <div><img src="#" alt="icon3"/></div>
                        </div>
                    </div>

                    <div className={s.messagesList}>
                        {
                            props.messagesPage.messages.map( m => <p key={m.id} ref={bottomRef} className={m.value ? s.yourSentMessage : s.userSentMessage}>{m.messageText}</p> )
                        }
                    </div>

                    <AddItemForm onClick={props.addMessage} onChange={props.updateMessageText} value={props.messagesPage.actualMessageText} />
                </div>
            </div>
        </div>

    </section>
}

export default ChatPage2;