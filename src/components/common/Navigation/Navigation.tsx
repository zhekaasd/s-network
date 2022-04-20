import {NavLink} from "react-router-dom";
import React from "react";
import {PATH} from "../../RoutesComponent/RoutesComponent";


import styles from "./Navigation.module.scss";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../reducers/store";

type ArrNavigationType = {
    id: number
    title: string
    path: string
}
function Navigation() {

    let id = useSelector((state: AppStateType) => state.auth.id);

    const arrNavigation: ArrNavigationType[] = [
        {id: 1, title: 'Profile', path: `${PATH.PROFILE}/${id}`},
        {id: 3, title: 'Messages', path: `${PATH.PROFILE}/${id}${PATH.MESSAGES}`},
        {id: 4, title: 'Users', path: `${PATH.USERS}`},
        // {id: 3, title: 'Messages', path: `${PATH.PROFILE}${PATH.MESSAGES}`},
        // {id: 4, title: 'Users', path: `${PATH.PROFILE}${PATH.USERS}`},
    ]

    return <nav className={styles.navigationContainer}>
        {
            arrNavigation.map((el) => <NavLink
                className={({isActive}) => isActive ? `${styles.active} ${styles.item}` : styles.item}
                key={el.id}
                to={el.path}
            >{el.title}</NavLink>)
        }
    </nav>
}

export default Navigation;