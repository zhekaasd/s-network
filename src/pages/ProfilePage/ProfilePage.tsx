import {SocialAccounts} from "../../components/common/SocialAccounts/SocialAccounts";
import {Timeline} from "../../components/common/Timeline/Timeline";
import React from "react";

/*--- css import ---*/
import styles from "./ProfilePage.module.scss";
import {PostType} from "../../reducers/newsfeed-reducer";
import ProfileMainInfoContainer from "./ProfileMainInfo/ProfileMainInfoContainer";
import Navigation from "../../components/common/Navigation/Navigation";

type ProfilePropsType = {
    addPost: () => void
    updatePostText: (value: string) => void
    posts: Array<PostType>
    actualPostText: string
}


export const ProfilePage: React.FC<ProfilePropsType> = ({addPost, updatePostText, posts, actualPostText, ...restProps}) => {


    const addPostHandler = () => {
        addPost();
    }

    const updatePostTextHandler = (value: string) => {
        updatePostText(value);
    }
    return <div>
        <ProfileMainInfoContainer />
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
