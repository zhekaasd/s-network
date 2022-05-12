import React, {useEffect, useRef} from "react";
import {NavLink} from "react-router-dom";
import {ProfileUserWithFakeLocationType, updateStatus} from "../../redux/reducers/profile-reducer";
import MUIAddItemForm from "../../components/common/Forms/AddItemForm/MUIAddItemForm";
import {PATH} from "../../components/RoutesComponent/RoutesComponent";
import {Line} from "../../components/common/Line/Line";
import {MessageType, UserType} from "../../redux/reducers/chat-reducer";
import {ProfileMainInfo} from "../ProfilePage/ProfileMainInfo/ProfileMainInfo";
import Navigation from "../../components/common/Navigation/Navigation";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store/store";

/*--- css import ---*/
import st from "./ChatPage.module.scss";
import photo from "../../other/images/1920x.webp";
import InputCustom from "../../components/common/Input/InputCustom";

type ChatPagePropsType = {
    messagesPage: {
        messages: Array<MessageType>,
        users: Array<UserType>,
        actualMessageText: string
    }
    addMessage: (value: string) => void,
    updateMessageText: (value: string) => void
    profile: ProfileUserWithFakeLocationType | null
}


const ChatPage: React.FC<ChatPagePropsType> = ({messagesPage, addMessage, profile, updateMessageText,
                                               ...restProps}) => {

    const bottomRef: any = useRef();

    useEffect(() => {
        bottomRef.current.scrollIntoView({block:'start'});
    },[messagesPage.messages]);


    let userSentMessageFilter = messagesPage.messages.filter(m => !m.value);
    let lastMessage = userSentMessageFilter[userSentMessageFilter.length - 1].messageText;


    const submit = (formData: any) => {
        addMessage(formData.value);
        console.log(formData);
    }

    const prof = useSelector((state: AppStateType) => state.auth.profile);




    return <div>

        <ProfileMainInfo profile={prof} status={'status'}
                         updateStatus={updateStatus} />
        <Navigation />

{/*--- Messages list ---*/}
        <div className={st.chatPageContainer}>
            <div className={st.chatPageDialogsBlock}>
                <div className={st.chatPageSearchBlock}>
                    <InputCustom widthField typeField={'outlined'} sizeField={'small'} />
                </div>

                {messagesPage.users.map(u => <NavLink
                    key={u.id}
                    className={({isActive}) => isActive ? st.chatPageDialogsItem + ' ' + st.active : st.chatPageDialogsItem}
                    to={PATH.MESSAGES + '/' + u.id}>

                    <img src={photo} alt=""/>

                    <div className={st.chatPageDialogsItemInfo}>

                        <div className={st.chatPageDialogsItemDetailsInfo}>
                            <h3>{u.firstName} {u.lastName}</h3>
                            <p>{lastMessage}</p>
                        </div>

                        <span>{new Date().getHours() + ':' + new Date().getMinutes()}</span>
                    </div>
                </NavLink>)}

            </div>

            <div className={st.chatPageMessagesBlock}>
                <div className={st.userName}>
                    <div className={st.mData}>
                        <h3>John Doe</h3>
                        <span>online</span>
                    </div>
                    <div>
                        <span>last seen within a mount</span>
                    </div>
                </div>

                <Line />
{/*--- Messages list ---*/}
                <div className={st.messagesList}>
                    {
                        messagesPage.messages.map(m => <p key={m.id} ref={bottomRef}
                                                                className={m.value ? st.yourSentMessage : st.userSentMessage}>{m.messageText}</p>)
                    }
                </div>

                <Line />
{/*--- Add text message form ---*/}
                <div className={st.addItemForm}>
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


