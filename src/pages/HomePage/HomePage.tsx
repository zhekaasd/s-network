import React from "react";
import {NavLink} from "react-router-dom";
import {Timeline} from "../../components/common/Timeline/Timeline";
import RandomUsers from "../../components/RandomUsers/RandomUsers";
import {PATH} from "../../components/RoutesComponent/RoutesComponent";
import {useSelector} from "react-redux";
import Weather from "../../components/Weather/Weather";
import {PostType} from "../../redux/reducers/newsfeed-reducer";
import {AppStateType} from "../../redux/store/store";

/*--- import styles ---*/
import st from "./HomePage.module.scss";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import photo from "../../other/images/1920x.webp";


type HPPropsType = {
    newsfeedPage: {
        posts: Array<PostType>
    }
    addPost: (value: string) => void
}


const HomePage: React.FC<HPPropsType> = ({newsfeedPage, addPost, ...restProps}) => {

    const profileData = useSelector((state: AppStateType) => state.auth.profile);
    const authUserId = useSelector((state: AppStateType) => state.auth.id);



    return <div className={st.homePageContainer}>

        <div className={st.homePageColumnLeft}>

            <div className={st.homePageAccountBlock}>
{/*--- Random banner profile ---*/}
                <div className={st.homePageBackgroundBanner}></div>

                <div className={st.homePageAccountPhoto}>
                    <img src={profileData?.photos.small ? profileData?.photos.small : photo} alt=""/>
                </div>

                <div className={st.homePageAccountInfo}>
                    <p>{profileData?.fullName}</p>
                    <span>
                        <LocationOnIcon fontSize={'small'} /> 154 Engelsa Prospekt, Suite 226, St. Petersburg
                    </span>

                </div>

                <NavLink to={`${PATH.PROFILE}/${authUserId}`}>
                    View Profile
                </NavLink>
            </div>

            <div className={st.homePageRandomUsers}>
                <RandomUsers />
            </div>

        </div>


        <Timeline
            posts={newsfeedPage.posts}
            addPost={addPost}
        />


        <div className={st.homePageColumnRight}>
            <RandomUsers />
            <Weather />
        </div>

    </div>
}


export default HomePage;



