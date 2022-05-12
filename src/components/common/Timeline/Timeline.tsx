import React from "react";
import {Post} from "./Post/Post";
import MUIAddItemForm from "../Forms/AddItemForm/MUIAddItemForm";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {PostType} from "../../../redux/reducers/newsfeed-reducer";
import { AppStateType } from "../../../redux/store/store";

/*--- css import ---*/
import styles from "./Timeline.module.scss";


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

/*--- id from query params ---*/
    const {id} = useParams();

/*-- mapping posts from state data --*/
    let mappingPosts = posts.map(p => <Post key={p.id} isParams={profileData?.userId} value={p.whoseMessageItIs} postText={p.postText}
                                            likesCount={p.likesCount} commentsCount={p.commentsCount} />);

    const submit = (formData: any) => {
        addPost(formData.value);
        formData.value = '';
    }

    return <div className={styles.timelineContainer}>

        {
            isAuth && !id || (Number(id) && Number(id) === authUserId) ? <div className={authUserPhoto ? styles.formAddPostWithAvatar : styles.formAddPost}>
                {authUserPhoto && <img src={authUserPhoto} alt="???"/>}
                <MUIAddItemForm onSubmit={submit} />
            </div> : ''
        }



        {mappingPosts}

    </div>
}