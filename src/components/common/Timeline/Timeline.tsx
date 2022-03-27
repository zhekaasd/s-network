import styles from "./Timeline.module.scss";
import photo from "../../../other/images/1920x.webp";
import {AddItemForm} from "../../../AddItemForm";
import React from "react";
import {Post} from "../../content/profile/Post/Post";
import {PostType} from "../../../reducers/newsfeed-reducer";
import MUIAddItemForm from "../../accets/AddItemForm/MUIAddItemForm";


type TimelinePropsType = {
    avatar?: string,
    onClickHandler: () => void
    onChangeHandler: (value: string) => void
    posts: PostType[]
    actualPostText: string
}
export const Timeline: React.FC<TimelinePropsType> = (props) => {

    /*-- Мапим все посты из стейта --*/
    let posts = props.posts.map(p => <Post key={p.id} value={p.value} postText={p.postText}
                                           likesCount={p.likesCount} commentsCount={p.commentsCount}/>);

    return <div className={styles.postContainer}>
        <div className={props.avatar ? styles.formAvatar : styles.form}>
            {props.avatar && <img style={{borderRadius: "100%"}} src={props.avatar} alt="???"/>}

            {/*<AddItemForm onClick={props.onClickHandler} onChange={props.onChangeHandler}*/}
            {/*             value={props.actualPostText}/>*/}

            <MUIAddItemForm onClick={props.onClickHandler} onChange={props.onChangeHandler}
                            value={props.actualPostText} numberRows={3}/>
        </div>


        {posts}
    </div>
}