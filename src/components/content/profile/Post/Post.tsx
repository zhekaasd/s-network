import React from "react";
import "./post.module.scss";
import avatar from "../../../../other/images/1920x.webp";
import avatar2 from "../../../../other/images/1307218.jpg";
import styles from "./post.module.scss";


export function Post( props: {postText: string, value?: boolean, commentsCount: number, likesCount: number} ) {
    let value = props.value;
    if(value === undefined) {
        value = true;
    }
    return <div className={value ? styles.myPostWrapper : styles.userPostWrapper}>

        <div className={styles.postData}>
            <img  src={value ? avatar : avatar2} alt="avatar" />
            <div>
                <span style={{display: "inline-block"}}><b>{value ? 'John Doe' : 'User 1'}</b></span>
                <span>{new Date().toLocaleTimeString()}</span>
            </div>
        </div>
        <p>{props.postText}</p>
        <div className={styles.line}></div>
        <div className={styles.blockCounts}>
            <span>like {props.likesCount}</span>
            <span>comment {props.commentsCount}</span>
        </div>
    </div>
}