import {NavLink} from "react-router-dom";
import React from "react";

import styles from "./navigation.module.scss";



function Navigation() {
    return <nav >
        <div className={styles.container}>
            <div className={styles.navigation}>
                <ul>
                    <li><NavLink to="/profile">Profile</NavLink> </li>
                    <li><NavLink to="/timeline">Timeline</NavLink> </li>
                    <li><NavLink to="/messages">Messages</NavLink> </li>
                    <li><NavLink to="/users">Users</NavLink> </li>
                    <li><NavLink to="/music">Music</NavLink> </li>
                    <li><NavLink to="/other">Other</NavLink> </li>
                </ul>
            </div>
        </div>

    </nav>
}

export default Navigation;