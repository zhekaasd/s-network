import {SocialAccounts} from "../../components/common/SocialAccounts/SocialAccounts";
import {Timeline} from "../../components/common/Timeline/Timeline";
import React from "react";

/*--- css import ---*/
import styles from "./ProfilePage.module.scss";
import {PostType} from "../../reducers/newsfeed-reducer";
import Navigation from "../../components/common/Navigation/Navigation";
import {ProfileMainInfo} from "./ProfileMainInfo/ProfileMainInfo";
import {ProfileUserWithFakeLocationType} from "../../reducers/profile-reducer";

type ProfilePropsType = {
    addPost: () => void
    updatePostText: (value: string) => void
    posts: Array<PostType>
    actualPostText: string
    profile: ProfileUserWithFakeLocationType | null
    isAuth: boolean
    status: string

    updateStatus: (status: string) => void
}


export const ProfilePage: React.FC<ProfilePropsType> = ({addPost, updatePostText, posts, actualPostText,
                                                            status, profile, isAuth,
                                                            updateStatus, ...restProps}) => {


    const addPostHandler = () => {
        addPost();
    }

    const updatePostTextHandler = (value: string) => {
        updatePostText(value);
    }



    return <div>
        <ProfileMainInfo profile={profile} status={status}
                         updateStatus={updateStatus} />
        <Navigation />
        <div className={styles.mainContainer}>
{/*            <div>*/}
            <SocialAccounts/>
            {/*<RandomUsers/>*/}
{/*            </div>*/}

            <Timeline onClickHandler={addPostHandler}
                      onChangeHandler={updatePostTextHandler} posts={posts} actualPostText={actualPostText}/>
        </div>
    </div>
}
