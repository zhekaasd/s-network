import React from "react";
import {NavLink} from "react-router-dom"
import {PostType} from "../../state/store";
import {Timeline} from "../../components/common/Timeline/Timeline";
import {RandomUsers} from "../../RandomUsers";
import {PATH} from "../../components/RoutesComponent/RoutesComponent";

/*--- css import ---*/
import styles from "./homePage.module.scss";
import photo from "../../other/images/1920x.webp";


type HPPropsType = {
    newsfeedPage: {
        posts: Array<PostType>,
        actualPostText: string
    }
    addPost: () => void
    updatePostText: (value: string) => void
}


const HomePage: React.FC<HPPropsType> = ({newsfeedPage, addPost, updatePostText, ...restProps}) => {

    const addPostHandler = () => {
        addPost();
    }

    return <div className={styles.homePageContainer}>

        <div className={styles.homePageColumnLeft}>

            <div className={styles.homePageAccountBlock}>

                <div className={styles.homePageBackgroundBanner}></div>

                <div className={styles.homePageAccountPhoto}>
                    <img src={photo} alt=""/>
                </div>

                <div className={styles.homePageAccountInfo}>
                    <p>John Doe</p>
                    <span>location!</span>
                </div>

                <NavLink to={PATH.PROFILE}>
                    View Profile
                </NavLink>
            </div>

            <div className={styles.homePageRandomUsers}>
                <RandomUsers/>
            </div>

        </div>


        <Timeline
            avatar={photo}
            posts={newsfeedPage.posts}
            actualPostText={newsfeedPage.actualPostText}
            onChangeHandler={updatePostText}
            onClickHandler={addPostHandler}
        />


        <div className={styles.homePageColumnRight}>
            <RandomUsers/>
        </div>

    </div>
}


export default HomePage;



