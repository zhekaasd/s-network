import React from "react";
import styles from './profile.module.scss';
import Navigation from "../common/navigation/Navigation";
import {PostType} from "../../../state/store";
import {SocialAccounts} from "../../common/socialAccounts/SocialAccounts";
import {Timeline} from "../../common/Timeline/Timeline";
import {ProfileUserType} from "../../../reducers/profile-reducer";
import UserProfile from "../common/UserProfile/UserProfile";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {RandomUsers} from "../../../RandomUsers";

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

    return <div className={styles.mainContainer}>

        <UserProfile profile={restProps.profile} />
        <Navigation/>

        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.profile}>

                        <SocialAccounts />
                    <RandomUsers />
                        <Timeline avatar={restProps.avatar} onClickHandler={addPostHandler} onChangeHandler={updatePostTextHandler} posts={posts} actualPostText={actualPostText} />


                </div>
            </div>
        </div>

    </div>
}

