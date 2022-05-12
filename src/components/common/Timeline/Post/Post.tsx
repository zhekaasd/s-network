import React, {useState} from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {AppStateType} from "../../../../redux/store/store";

/*--- css import ---*/
import avatar2 from "../../../../other/images/icon/users.png";
import styles from "./Post.module.scss";

type PostPropsType = {
    postText: string,
/*--- Значение с помощью которого имитируется пост от другого пользователя ---*/
    value?: boolean,
    commentsCount: number,
    likesCount: number,
    isParams: number | undefined
}
export const Post: React.FC<PostPropsType> = ({
                                                  postText, commentsCount, likesCount,
                                                  value, ...restProps
                                              }) => {


/*--- Data from user profile ---*/
    const userProfile = useSelector((state: AppStateType) => state.profilePage.profile);
/*--- Data from auth user profile ---*/
    const authUserProfile = useSelector((state: AppStateType) => state.auth.profile);
/*--- Params userId data ---*/
    const {id} = useParams();

/*--- changed likes count ---*/
    let [countLikes, setCountLikes] = useState(likesCount);
    let [active, setActive] = useState<boolean>(false);

    const countLikesHandler = () => {
        if (active) {
            setCountLikes(countLikes - 1);
            setActive(false);
        } else {
            setCountLikes(countLikes + 1);
            setActive(true);
        }
    }

/*--- data ---*/
    const currentTime = new Date().toLocaleTimeString();


    return id ? <div className={styles.postContainer}>

            <div className={styles.postData}>
                <img src={value ? userProfile?.photos.small : avatar2} alt="avatar"/>
                <div className={styles.postDataName}>
                    <p>{value ? userProfile?.fullName : 'User 1'}</p>
                    <span>{currentTime}</span>
                </div>
            </div>
            <p className={styles.postText}>{postText}</p>
            <div className={styles.line}></div>
            <div className={styles.postLikeCommentBlock}>
                <span> <ThumbUpIcon className={active ? styles.activeSvg : ''} onClick={countLikesHandler}
                                    fontSize={'small'}/> {countLikes}</span>
                <span className={styles.comments}> <ChatBubbleIcon fontSize={'small'}/> {commentsCount}</span>
            </div>
        </div>
        : <div className={styles.postContainer}>

            <div className={styles.postData}>
                <img src={value ? authUserProfile?.photos.small : avatar2} alt="avatar"/>
                <div className={styles.postDataName}>
                    <p>{value ? authUserProfile?.fullName : 'John Doe'}</p>
                    <span>{currentTime}</span>
                </div>
            </div>
            <p className={styles.postText}>{postText}</p>
            <div className={styles.line}></div>
            <div className={styles.postLikeCommentBlock}>
                <span> <ThumbUpIcon className={active ? styles.activeSvg : ''} onClick={countLikesHandler}
                                    fontSize={'small'}/> {countLikes}</span>
                <span className={styles.comments}> <ChatBubbleIcon fontSize={'small'}/> {commentsCount}</span>
            </div>
        </div>
}