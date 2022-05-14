import {SocialAccounts} from "../../components/common/SocialAccounts/SocialAccounts";
import {Timeline} from "../../components/common/Timeline/Timeline";
import React from "react";
import {PostType} from "../../redux/reducers/newsfeed-reducer";
import Navigation from "../../components/common/Navigation/Navigation";
import {ProfileMainInfo} from "./ProfileMainInfo/ProfileMainInfo";
import {ProfileUserWithFakeLocationType} from "../../redux/reducers/profile-reducer";

/*--- styles import ---*/
import st from "./ProfilePage.module.scss";
import RandomUsers from "../../components/RandomUsers/RandomUsers";
import Weather from "../../components/Weather/Weather";

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
        <div className={st.mainContainer}>
            <aside>
                <SocialAccounts/>

                <div className={st.randomUsers}>
                    <RandomUsers />
                </div>
            </aside>

            <Timeline addPost={addPost} posts={posts}/>
            <aside>
                <Weather />
            </aside>
        </div>
    </div>
}
