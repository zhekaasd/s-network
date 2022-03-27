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


        <div >
{/*

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

*/}


            <div className={styles.newsfeedOwner2}>

                <div className={styles.newsfeedOwner2SecondColor}></div>

                <div className={styles.newsfeedOwnerPhoto}>
                    <img src={photo} alt=""/>
                </div>

                <div className={styles.newsfeedOwnerInfo}>
                    <p>John Doe</p>
                    <span>location!</span>
                </div>

                <NavLink to={'/profile'}>
                    View Profile
                </NavLink>
            </div>




        </div>



        <Timeline
            avatar={photo}
            posts={newsfeedPage.posts}
            actualPostText={newsfeedPage.actualPostText}
            onChangeHandler={updatePostText}
            onClickHandler={addPostHandler}
        />



    </div>
}


export default Newsfeed;



