import React from "react";
import {Post} from "./Post/Post";
import {PostType} from "../../../reducers/newsfeed-reducer";
import MUIAddItemForm from "../AddItemForm/MUIAddItemForm";

/*--- css import ---*/
import styles from "./Timeline.module.scss";


type TimelinePropsType = {
    avatar?: string,
    onClickHandler: () => void
    onChangeHandler: (value: string) => void
    posts: PostType[]
    actualPostText: string
}

export const Timeline: React.FC<TimelinePropsType> = ({onChangeHandler, onClickHandler, actualPostText,
                                                          posts, ...restProps}) => {

/*-- mapping posts from state data --*/
    let mappingPosts = posts.map(p => <Post key={p.id} value={p.value} postText={p.postText}
        likesCount={p.likesCount} commentsCount={p.commentsCount} />);


    return <div className={styles.timelineContainer}>

        <div className={restProps.avatar ? styles.formAddPostWithAvatar : styles.formAddPost}>
            {restProps.avatar && <img src={restProps.avatar} alt="???"/>}

            <MUIAddItemForm onClick={onClickHandler} onChange={onChangeHandler}
                            value={actualPostText} numberRows={3} />
        </div>

        {mappingPosts}

    </div>
}