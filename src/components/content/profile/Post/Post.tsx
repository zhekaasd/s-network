import React from "react";

import avatar from "../../../../other/images/postAvatar1.jpg";
import avatar2 from "../../../../other/images/users.png";
import styles from "./post.module.scss";


export function Post( props: {postText: string, value?: boolean, commentsCount: number, likesCount: number} ) {

    let value = props.value;
    if(value === undefined) {
        value = true;
    }

    return <div className={styles.postContainer}>

        <div className={styles.postData}>
            <img  src={value ? avatar : avatar2} alt="avatar" />
            <div className={styles.fullName}>
                <p style={{display: "inline-block"}}>{value ? 'John Doe' : 'User 1'}</p>
                <span>{new Date().toLocaleTimeString()}</span>
            </div>
        </div>
        <p className={styles.postText}>{props.postText}</p>
        <div className={styles.line}></div>
        <div className={styles.blockCounts}>
            <span>like {props.likesCount}</span>
            <span>comment {props.commentsCount}</span>
        </div>
    </div>
}