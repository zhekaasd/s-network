import React from "react";
import styles from "./profileOwner.module.scss"


export function ProfileOwner() {
    return <div className={styles.profileOwner}>
        <div className={styles.profileOwnerWrapper}>
            <div className={styles.container}>

                <div className={styles.ownerName}>
                    <h2>John Doe</h2>
                    <span>Member since August 2017</span>
                    <span>
                        <i>
                            Location
                        </i>
                    </span>
                </div>

                <div className={styles.editProfileButton}>
                    <button>edit</button>
                </div>

            </div>
        </div>
    </div>
}