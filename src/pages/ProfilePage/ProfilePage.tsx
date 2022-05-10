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
    addPost: (value: string) => void
    posts: Array<PostType>
    profile: ProfileUserWithFakeLocationType | null
    isAuth: boolean
    status: string
    updateStatus: (status: string) => void
}


export const ProfilePage: React.FC<ProfilePropsType> = ({addPost, posts, status, profile,
                                                            isAuth, updateStatus, ...restProps}) => {






    return <div>
        <ProfileMainInfo profile={profile} status={status}
                         updateStatus={updateStatus} />
        <Navigation />
        <div className={styles.mainContainer}>
{/*            <div>*/}
            <SocialAccounts/>
            {/*<RandomUsers/>*/}
{/*            </div>*/}

            <Timeline addPost={addPost} posts={posts}/>
        </div>
    </div>
}
