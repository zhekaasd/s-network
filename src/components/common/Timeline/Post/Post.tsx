import React, {useState} from "react";

/*--- css import ---*/
import avatar from "../../../../other/images/postAvatar1.jpg";
import avatar2 from "../../../../other/images/users.png";
import styles from "./post.module.scss";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';


export function Post( props: {postText: string, value?: boolean, commentsCount: number, likesCount: number} ) {

/*--- Заглушка имитирующая переданную в пропсах фотографию ---*/
    let value = props.value;
    if(value === undefined) {
        value = true;
    }

    let [countLikes, setCountLikes] = useState(props.likesCount);

    return <div className={styles.postContainer}>

        <div className={styles.postData}>
            <img  src={value ? avatar : avatar2} alt="avatar" />
            <div className={styles.postDataName}>
                <p>{value ? 'John Doe' : 'User 1'}</p>
                <span>{new Date().toLocaleTimeString()}</span>
            </div>
        </div>
        <p className={styles.postText}>{props.postText}</p>
        <div className={styles.line}></div>
        <div className={styles.postLikeCommentBlock}>
            <span> <ThumbUpIcon onClick={() => setCountLikes(countLikes + 1)} fontSize={'small'} /> {countLikes}</span>
            <span className={styles.comments}> <ChatBubbleIcon fontSize={'small'} /> {props.commentsCount}</span>
        </div>
    </div>
}