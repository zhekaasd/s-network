import React, {useEffect, useState} from "react";

import styles from "./randomUsers.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./reducers/store";
import {usersAPI} from "./dal/api";
import {getRandomBackgroundBanner, getRandomLocationCity, getRandomUsers} from "./fakeLocation/fakeLocation";
import {setUsers, User} from "./reducers/users-reducer";
import {Link, NavLink} from "react-router-dom";
import ButtonCustom from "./components/accets/components/buton/ButtonCustom";

import iconUser from "./other/images/icon/users.png";
import {PATH} from "./components/RoutesComponent/RoutesComponent";

export const RandomUsers = () => {

    const currentPage = useSelector((state: AppStateType) => state.usersPage.currentPage);
    const usersRandom = useSelector((state: AppStateType) => state.usersPage.users);

    const dispatch = useDispatch();


    useEffect(() => {
        usersAPI.getUsers(currentPage, 100)
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
                    usersRandom.map( el => <RandomItem key={el.id} photo={el.photos.small} name={el.name} />)
                }
            </div>

    );
};

const RandomItem = (props: {name: string, photo: string}) => {

    let [follow, setFollow] = useState<boolean>(false);

    return <div className={styles.randomUser}>
        <div className={styles.randomUserInfo}>
            <img src={props.photo ? props.photo : iconUser} alt="#"/>
            <p>{props.name}</p>
        </div>
        {
            !follow ? <ButtonCustom sizeButton={'small'} onClick={() => setFollow(true)}>Unfollow</ButtonCustom>
                : <ButtonCustom sizeButton={'small'} onClick={() => setFollow(false)}>Follow</ButtonCustom>
        }
    </div>
}