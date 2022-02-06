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
const NewsPage: React.FC<NPPropsType> = ({newsfeedPage, addPost, updatePostText, ...restProps}) => {

    const addPostHandler = () => {
        addPost();
    }



    return <div className={styles.newsPage}>
        <div className={styles.container}>

            <aside className={styles.owner}>
                <img src={photo} alt=""/>
                <p>John Doe</p>
                <span>location!</span>
                <NavLink to={'/profile'}>
                    View Profile
                </NavLink>
            </aside>

            <section className={styles.newsfeed}>
                <Timeline
                    posts={newsfeedPage.posts}
                    actualPostText={newsfeedPage.actualPostText}
                    onChangeHandler={updatePostText}
                    onClickHandler={addPostHandler}
                />
            </section>

            <aside className={styles.userFollowing}>block3</aside>

        </div>
    </div>
}


export default NewsPage;