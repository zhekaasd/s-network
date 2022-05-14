import React, {useEffect} from "react";

import {connect, useDispatch} from "react-redux";
import {usersAPI} from "../../dal/api";
import {NavLink} from "react-router-dom";
import {PATH} from "../RoutesComponent/RoutesComponent";
import {followUser, setUsers, unfollowUser, User, UserWithFakeLocation} from "../../redux/reducers/users-reducer";
import {getRandomBackgroundBanner, getRandomLocationCity, getRandomUsers} from "../../utils/utils";
import {AppStateType} from "../../redux/store/store";
import {RandomItem} from "./RandomItem/RandomItem";

/*--- import styles ---*/
import st from "./RandomUsers.module.scss";


type MapDispatchPropsType = {
    unfollowUser: (id: number) => void
    followUser: (id: number) => void
}
type MapStatePropsType = ReturnType<typeof mapStateToProps>;
const mapStateToProps = (state: AppStateType) => {
    return {
        usersRandom: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress
    }
}


type RandomUsersPropsType = {
    usersRandom: UserWithFakeLocation[],
    currentPage: number,
    unfollowUser: (id: number) => void,
    followUser: (id: number) => void
    followingInProgress: number[]
}

/*--- Expand default user profile from server ---*/
export const expandDefaultUserObjectFromServer = (obj: User) => {
    return {
        ...obj,
        locationUser: getRandomLocationCity(),
        backgroundBanner: getRandomBackgroundBanner()
    }
}

const RandomUsers: React.FC<RandomUsersPropsType> = (props) => {

    const dispatch = useDispatch();


    useEffect(() => {
        usersAPI.getUsers(props.currentPage, 100)
            .then((resp) => {
                usersAPI.changeNumberPage(Math.ceil(resp.data.totalCount / 100 ), 100)
                    .then((resp) => {
                        let data = [...resp.data.items.map(expandDefaultUserObjectFromServer)];

                        if(data.length < 5) {
                            usersAPI.changeNumberPage(Math.ceil(resp.data.totalCount / 100 ) - 1, 100)
                                .then( (resp) => {
                                    let data = [...resp.data.items.map(expandDefaultUserObjectFromServer)];
                                    let randomUsers = getRandomUsers(data);
                                    dispatch(setUsers(randomUsers));
                                })
                        } else {
                            let randomUsers = getRandomUsers(data);
                            dispatch(setUsers(randomUsers));
                        }
                    })
            })
    }, []);


    return (
        <div className={st.randomUsers}>

                <div className={st.title}>
                    <h3>Follow Popular</h3>
                    <NavLink to={PATH.USERS}>See All</NavLink>
                </div>
                {
                    props.usersRandom.map( el => <RandomItem followingInProgress={props.followingInProgress}
                                                             key={el.id} followUser={props.followUser}
                                                             unfollowUser={props.unfollowUser}
                                                             followed={el.followed} id={el.id}
                                                             photo={el.photos.small} name={el.name} />)
                }
            </div>

    );
};


export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    unfollowUser, followUser
})(RandomUsers);




