import React from "react";
import {NavLink} from "react-router-dom";
import {Timeline} from "../../components/common/Timeline/Timeline";
import RandomUsers from "../../RandomUsers";
import {PATH} from "../../components/RoutesComponent/RoutesComponent";
import {AppStateType} from "../../reducers/store";
import {PostType} from "../../reducers/newsfeed-reducer";
import {useSelector} from "react-redux";

/*--- css import ---*/
import styles from "./HomePage.module.scss";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import photo from "../../other/images/1920x.webp";
import Weather from "../../Weather";


type HPPropsType = {
    newsfeedPage: {
        posts: Array<PostType>,
        actualPostText: string
    }
    addPost: () => void
    updatePostText: (value: string) => void
}


const HomePage: React.FC<HPPropsType> = ({newsfeedPage, addPost, updatePostText, ...restProps}) => {

    const profileData = useSelector((state: AppStateType) => state.auth.profile);
    const authUserId = useSelector((state: AppStateType) => state.auth.id);

    const addPostHandler = () => {
        addPost();
    }

    return <div className={styles.homePageContainer}>

        <div className={styles.homePageColumnLeft}>

            <div className={styles.homePageAccountBlock}>

                <div className={styles.homePageBackgroundBanner}></div>

                <div className={styles.homePageAccountPhoto}>
                    <img src={profileData?.photos.small ? profileData?.photos.small : photo} alt=""/>
                </div>

                <div className={styles.homePageAccountInfo}>
                    {/*<p>{profileData?.fullName}</p>*/}
                    <p>{profileData?.fullName}</p>
                    <span> <LocationOnIcon fontSize={'small'} /> 154 Engelsa Prospekt, Suite 226, St. Petersburg</span>

                </div>

                <NavLink to={PATH.PROFILE + '/' + authUserId}>
                    View Profile
                </NavLink>
            </div>

            <div className={styles.homePageRandomUsers}>
                <RandomUsers />
            </div>

        </div>


        <Timeline
            posts={newsfeedPage.posts}
            actualPostText={newsfeedPage.actualPostText}
            onChangeHandler={updatePostText}
            onClickHandler={addPostHandler}
        />


        <div className={styles.homePageColumnRight}>
            <RandomUsers />
            <Weather />
        </div>

    </div>
}


export default HomePage;



