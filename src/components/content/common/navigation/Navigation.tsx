import {NavLink} from "react-router-dom";
import React from "react";

import styles from "./navigation.module.scss";


function Navigation() {

    return <nav className={styles.navigationContainer}>
            <div className={styles.navigationList}>

                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/timeline">Timeline</NavLink>
                    <NavLink to="/messages">Messages</NavLink>
                    <NavLink to="/users">Users</NavLink>

        </div>

    </nav>
}

export default Navigation;