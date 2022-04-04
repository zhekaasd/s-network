import {NavLink} from "react-router-dom";
import React from "react";

import styles from "./navigation.module.scss";
import {PATH} from "../../RoutesComponent/RoutesComponent";


function Navigation() {

    return <nav className={styles.navigationContainer}>
        <NavLink to={PATH.PROFILE}>Profile</NavLink>
        <NavLink to={PATH.HOME}>Timeline</NavLink>
        <NavLink to={PATH.MESSAGES}>Messages</NavLink>
        <NavLink to={PATH.USERS}>Users</NavLink>
    </nav>
}

export default Navigation;