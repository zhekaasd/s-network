import React, {useEffect} from "react";

import styles from "./randomUsers.module.scss";
import {connect, useDispatch} from "react-redux";
import {AppStateType} from "./reducers/store";
import {usersAPI} from "./dal/api";
import {getRandomBackgroundBanner, getRandomLocationCity, getRandomUsers} from "./fakeLocation/fakeLocation";
import {followUser, setUsers, unfollowUser, User, UserWithFakeLocation} from "./reducers/users-reducer";
import {NavLink} from "react-router-dom";
import ButtonCustom from "./components/accets/components/buton/ButtonCustom";

import iconUser from "./other/images/icon/users.png";
import {PATH} from "./components/RoutesComponent/RoutesComponent";


type MDTPT = {
    unfollowUser: (id: number) => void
    followUser: (id: number) => void
}
type MSTPT = ReturnType<typeof mapStateToProps>;
const mapStateToProps = (state: AppStateType) => {
    return {
        usersRandom: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress
    }
}


const RandomItem = (props: {
    name: string,
    photo: string,
    id: number,
    followed: boolean,
    unfollowUser: (id: number) => void
    followUser: (id: number) => void
    followingInProgress: number[]
}) => {

    return <div className={styles.randomUser}>
        <NavLink to={`${PATH.PROFILE}/${props.id}`} className={styles.randomUserInfo}>
            <img src={props.photo ? props.photo : iconUser} alt="#"/>
            <p>{props.name}</p>
        </NavLink>
        {
            props.followed ? <ButtonCustom disabled={props.followingInProgress.some((id) => id === props.id)} sizeButton={'small'} onClick={() => props.unfollowUser(props.id)}>Unfollow</ButtonCustom>
                : <ButtonCustom disabled={props.followingInProgress.some((id) => id === props.id)} sizeButton={'small'} onClick={() => props.followUser(props.id)}>Follow</ButtonCustom>
        }
    </div>
}


type RandomUsersPropsType = {
    usersRandom: UserWithFakeLocation[],
    currentPage: number,
    unfollowUser: (id: number) => void,
    followUser: (id: number) => void
    followingInProgress: number[]
}
const RandomUsers: React.FC<RandomUsersPropsType> = (props) => {

    const dispatch = useDispatch();


    useEffect(() => {
        usersAPI.getUsers(props.currentPage, 100)
            .then((resp) => {
                usersAPI.changeNumberPage(Math.ceil(resp.data.totalCount / 100 ), 100)
                    .then((resp) => {

                        /*---get user data from server, changed type item, add fake location ---*/
                        let data = [...resp.data.items.map( (u: User) => ({
                            ...u,
                            locationUser: getRandomLocationCity(),
                            backgroundBanner: getRandomBackgroundBanner()
                        }))];

                        if(data.length < 5) {



                            usersAPI.changeNumberPage(Math.ceil(resp.data.totalCount / 100 ) - 1, 100)
                                .then(resp => {
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


        <div className={styles.randomUsers}>

                <div className={styles.title}>
                    <h3>Follow Popular</h3>
                    <NavLink to={PATH.USERS}>See All</NavLink>
                </div>
                {
                    props.usersRandom.map( el => <RandomItem followingInProgress={props.followingInProgress} key={el.id} followUser={props.followUser} unfollowUser={props.unfollowUser} followed={el.followed} id={el.id} photo={el.photos.small} name={el.name} />)
                }
            </div>

    );
};


export default connect<MSTPT, MDTPT, {}, AppStateType>(mapStateToProps, {
    unfollowUser, followUser
})(RandomUsers);


