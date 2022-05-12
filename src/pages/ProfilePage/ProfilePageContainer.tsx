import {connect, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {ProfilePage} from "./ProfilePage";
import {useNavigate, useParams} from "react-router-dom";
import {getStatusProfile, setUserProfile, updateStatus} from "../../redux/reducers/profile-reducer";
import {compose} from "redux";
import {AppStateType} from "../../redux/store/store";
import {addPost} from "../../redux/reducers/newsfeed-reducer";

type MDTPType = {
    addPost: (value: string) => void
    setUserProfile: (id: number) => void
    getStatusProfile: (userId: number) => void
    updateStatus: (status: string) => void
}
type MapStatePropsType = ReturnType<typeof mapStateToProps>;
const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.newsfeedPage.posts.filter(p => p.whoseMessageItIs),
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
}

type ProfilePageContainerType = MapStatePropsType & MDTPType;


const ProfilePageContainer: React.FC<ProfilePageContainerType> = (props) => {

    let authUserId = useSelector((state: AppStateType) => state.auth.id) as number;

    let {id} = useParams();
    let paramId = Number(id);
    let navigate = useNavigate();


    if(!paramId || null) {
        paramId = authUserId;
    }


    useEffect(() => {
        props.setUserProfile(paramId);
        props.getStatusProfile(paramId);

        if (!paramId || null) {
            navigate('/login');
        }

    }, [paramId]);



        return <ProfilePage posts={props.posts} updateStatus={props.updateStatus} addPost={props.addPost}
                            profile={props.profile} status={props.status} isAuth={props.isAuth}

        />
}



export default compose<React.ComponentType>(
    connect<MapStatePropsType, MDTPType, {}, AppStateType>(mapStateToProps, {
        addPost, setUserProfile, getStatusProfile, updateStatus
    }),
    // withRedirect
)(ProfilePageContainer);