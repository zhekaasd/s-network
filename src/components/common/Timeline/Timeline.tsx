import React from "react";
import {Post} from "./Post/Post";
import {PostType} from "../../../reducers/newsfeed-reducer";
import MUIAddItemForm from "../AddItemForm/MUIAddItemForm";

/*--- css import ---*/
import styles from "./Timeline.module.scss";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../reducers/store";


type TimelinePropsType = {
    onClickHandler: () => void
    onChangeHandler: (value: string) => void
    posts: PostType[]
    actualPostText: string
}

export const Timeline: React.FC<TimelinePropsType> = ({onChangeHandler, onClickHandler, actualPostText,
                                                          posts, ...restProps}) => {

    const profileData = useSelector((state: AppStateType) => state.profilePage.profile);
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
    const authUserPhoto = useSelector((state: AppStateType) => state.auth.profile);

/*-- mapping posts from state data --*/
    let mappingPosts = posts.map(p => <Post key={p.id} isParams={profileData?.userId} value={p.value} postText={p.postText}
                                            likesCount={p.likesCount} commentsCount={p.commentsCount} />);


    return <div className={styles.timelineContainer}>

        {
            !isAuth ? ''
                : <div className={profileData?.photos.small ? styles.formAddPostWithAvatar : styles.formAddPost}>
                {profileData?.photos.small && <img src={profileData?.photos.small} alt="???"/>}
                <MUIAddItemForm onClick={onClickHandler} onChange={onChangeHandler}
                                value={actualPostText} numberRows={3} />
            </div>
        }



        {mappingPosts}

    </div>
}