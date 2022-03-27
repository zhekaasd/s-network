import React from "react";
import {NavLink} from "react-router-dom"
import {PostType} from "../../state/store";


import styles from "./newsPage.module.scss";
import photo from "../../other/images/1920x.webp";
import {Timeline} from "../common/Timeline/Timeline";


type NPPropsType = {
    newsfeedPage: {
        posts: Array<PostType>,
        actualPostText: string
    }
    addPost: () => void
    updatePostText: (value: string) => void
}
//
const Newsfeed: React.FC<NPPropsType> = ({newsfeedPage, addPost, updatePostText, ...restProps}) => {

    const addPostHandler = () => {
        addPost();
    }


    return <div className={styles.newsfeedContainer}>


        <div className={styles.newsfeedOwner}>
            <img src={photo} alt=""/>
            <div className={styles.newsfeedOwnerInfo}>
                <p>John Doe</p>
                <span>location!</span>
            </div>
            <NavLink to={'/profile'}>
                View Profile
            </NavLink>
        </div>

        <Timeline
            avatar={photo}
            posts={newsfeedPage.posts}
            actualPostText={newsfeedPage.actualPostText}
            onChangeHandler={updatePostText}
            onClickHandler={addPostHandler}
        />

        <div className={styles.userFollowing}>block3</div>

    </div>
}


export default Newsfeed;