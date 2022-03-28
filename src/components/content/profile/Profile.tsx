import React from "react";
import Navigation from "../common/navigation/Navigation";
import {PostType} from "../../../state/store";
import {SocialAccounts} from "../../common/socialAccounts/SocialAccounts";
import {Timeline} from "../../common/Timeline/Timeline";
import {ProfileUserType} from "../../../reducers/profile-reducer";
import UserProfile from "../common/UserProfile/UserProfile";


import styles from './profile.module.scss';

type ProfilePropsType = {
    posts: Array<PostType>
    actualPostText: string
    addPost: () => void
    updatePostText: (value: string) => void
    avatar?: string
    profile: ProfileUserType | null
}
export const Profile:React.FC<ProfilePropsType> = ({posts,actualPostText , addPost, updatePostText, ...restProps}) => {
    
    const addPostHandler = () => {
        addPost();
    }

    const updatePostTextHandler = (value: string) => {
        updatePostText(value);
    }

    return <div className={styles.contentContainer}>

        <UserProfile profile={restProps.profile} />
        <Navigation/>

        <div className={styles.mainContainer}>
                <div>
                    <SocialAccounts/>
                    {/*<RandomUsers/>*/}
                </div>
                <Timeline avatar={restProps.avatar} onClickHandler={addPostHandler}
                          onChangeHandler={updatePostTextHandler} posts={posts} actualPostText={actualPostText}/>

        </div>

    </div>
}

