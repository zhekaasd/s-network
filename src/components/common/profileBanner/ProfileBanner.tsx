import React from "react";
import profilePhoto from "../../../other/images/1920x.webp";
import styles from "./profileBanner.module.scss";

export function ProfileBanner() {
    return <div className={styles.profileBanner}>

        <div className={styles.banner}>
        </div>


        <div className={styles.profilePhoto}>
                <div className={styles.container}>
                    <div className={styles.photo}>
                        <img src={profilePhoto} alt=""/>
                    </div>
                </div>
        </div>
    </div>
}