import React from "react";
import {Post} from "./Post/Post";
import {PostType} from "../../../reducers/newsfeed-reducer";
import MUIAddItemForm from "../AddItemForm/MUIAddItemForm";

/*--- css import ---*/
import styles from "./Timeline.module.scss";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../reducers/store";
import {useParams} from "react-router-dom";


type TimelinePropsType = {
    addPost: (value: string) => void
    posts: PostType[]
    paramSettings?: boolean
}

export const Timeline: React.FC<TimelinePropsType> = ({addPost, posts, ...restProps}) => {

    const profileData = useSelector((state: AppStateType) => state.profilePage.profile);
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
    const authUserId = useSelector((state: AppStateType) => state.auth.id);
    const authUserPhoto = useSelector((state: AppStateType) => state.auth.profile?.photos.small) as string;

    const id = useParams().id;

/*-- mapping posts from state data --*/
    let mappingPosts = posts.map(p => <Post key={p.id} isParams={profileData?.userId} value={p.whoseMessageItIs} postText={p.postText}
                                            likesCount={p.likesCount} commentsCount={p.commentsCount} />);


    const submit = (formData: any) => {
        addPost(formData.value);
        console.log(formData);
        formData.value = '';
    }

    return <div className={styles.timelineContainer}>

{/*        {
            !isAuth ? ''
                : <div className={profileData?.photos.small ? styles.formAddPostWithAvatar : styles.formAddPost}>
                {profileData?.photos.small && <img src={profileData?.photos.small} alt="???"/>}
                <MUIAddItemForm onClick={onClickHandler} onChange={onChangeHandler}
                                value={actualPostText} numberRows={3} />
            </div>
        }*/}

        {
            isAuth && !id || (Number(id) && Number(id) === authUserId) ? <div className={authUserPhoto ? styles.formAddPostWithAvatar : styles.formAddPost}>
                {authUserPhoto && <img src={authUserPhoto} alt="???"/>}
                {/*<MUIAddItemForm onClick={onClickHandler} onChange={onChangeHandler}*/}
                {/*                value={actualPostText} numberRows={3} />*/}
                <MUIAddItemForm onSubmit={submit} />
            </div> : ''
        }



        {mappingPosts}

    </div>
}