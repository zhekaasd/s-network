import {NavLink} from "react-router-dom";
import React from "react";
import {PATH} from "../../RoutesComponent/RoutesComponent";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";

/*--- styles import ---*/
import styles from "./Navigation.module.scss";

type ArrNavigationType = {
    id: number
    title: string
    path: string
}

function Navigation() {

    let id = useSelector((state: AppStateType) => state.auth.id);

    const arrNavigation: ArrNavigationType[] = [
        {id: 1, title: 'Profile', path: `${PATH.PROFILE}/${id}`},
        {id: 3, title: 'Messages', path: `${PATH.MESSAGES}`},
        {id: 4, title: 'Users', path: `${PATH.USERS}`},
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