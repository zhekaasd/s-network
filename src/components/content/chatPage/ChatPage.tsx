import React, {useState} from "react";
import styles from "./chatPage.module.scss";
import photo from "../../../other/images/1920x.webp";
import {MessageType, UserType} from "../../../state/store";
import {NavLink} from "react-router-dom";

function ChatPage(props: {messagesPage: { messages: Array<MessageType>, users: Array<UserType>, actualMessageText: string}, addMessage: () => void, updateMessageText: (value: string) => void}) {

    let [sortMessage, setSortMessage] = useState(true);

    let userSentMessageFilter = props.messagesPage.messages.filter(m => !m.value);
    let lastMessage = userSentMessageFilter[userSentMessageFilter.length - 1];



    return <section>

        {/*<ProfileBanner/>*/}
        {/*<ProfileOwner/>*/}
        {/*<Navigation/>*/}


        <div>
            <div className={styles.container}>

                <div className={styles.usersBlock}>
                    <div className={styles.searchField}>
                        <input type="text"/>
                        <button>search</button>
                        search field
                    </div>

                        {
                            props.messagesPage.users.map((u) => <NavLink
                                className={(navDate) => navDate.isActive ? styles.item + ' ' + styles.active : styles.item}  to={u.id}>
                                <img src={photo} alt="photo"/>
                                    <div>
                                        <h3>{u.firstName + ' ' + u.lastName} </h3>
                                        <span className={styles.timeMessage}>{new Date().getHours() + ':' + new Date().getMinutes()}</span>
                                    </div>

                                    <p>{lastMessage.messageText}</p>

                            </NavLink>)
                        }
                </div>

                <div className={styles.messagesBlock}>
                    <div className={styles.userName}>
                        <div>
                            <p>John Doe</p>
                            <span style={{display: "block"}}>online</span>
                        </div>
                        <nav style={{display: "flex"}}>
                            <div><img src="#" alt="icon1"/></div>
                            <div><img src="#" alt="icon2"/></div>
                            <div><img src="#" alt="icon3"/></div>
                        </nav>
                    </div>

                    <div className={styles.messagesList}>
                        <ListMessage messages={props.messagesPage.messages} />
                    </div>

                    <div className={styles.addMessageField}>
                        <div>
                            <input value={props.messagesPage.actualMessageText} onChange={(e) => props.updateMessageText(e.currentTarget.value)} type="text" />

                        </div>

                        <button onClick={() => props.addMessage()}>send</button>
                    </div>
                </div>


            </div>
        </div>
    </section>
}


export default ChatPage;


function ListMessage(props:{messages: Array<MessageType>}) {

    // const bottomRef: any = useRef();
    //
    // //
    //
    // useEffect(() => {
    //     bottomRef.current.scrollIntoView({block:'start'});
    // },[props.messages])

    return <>
        {
            //props.messages.map( m => <p  className={m.value ? styles.yourSentMessage : styles.userSentMessage}>{m.messageText}</p> )
            props.messages.map( m => <p  >{m.messageText}</p> )
        }
    </>
}