import React from "react";
import styles from './profile.module.scss';
import Navigation from "../../common/navigation/Navigation";
import {ProfileBanner} from "../../common/profileBanner/ProfileBanner";
import {ProfileOwner} from "../../common/profileOwner/ProfileOwner";
import {PostType} from "../../../state/store";
import {SocialAccounts} from "../../common/socialAccounts/SocialAccounts";
import {Timeline} from "../../common/Timeline/Timeline";

type ProfilePropsType = {
    posts: Array<PostType>,
    actualPostText: string
    addPost: () => void
    updatePostText: (value: string) => void
    avatar?: string
}
export const Profile:React.FC<ProfilePropsType> = ({posts,actualPostText , addPost, updatePostText, ...restPorps}) => {
    
    const addPostHandler = () => {
        addPost();
    }

    const updatePostTextHandler = (value: string) => {
        updatePostText(value);
    }
    
    return <section className={styles.main}>

        <ProfileBanner/>

        <ProfileOwner/>

        <Navigation/>


        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.profile}>
                    <aside>
                        <SocialAccounts />
                    </aside>

                    <section>
                        <Timeline avatar={restPorps.avatar} onClickHandler={addPostHandler} onChangeHandler={updatePostTextHandler} posts={posts} actualPostText={actualPostText} />
                    </section>

                    <aside>
                        <div className={styles.sideBlock}>block3</div>
                    </aside>
                </div>
            </div>
        </div>

    </section>
}

