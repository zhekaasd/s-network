import styles from "./SocialAccounts.module.scss";
import React from "react";


export const SocialAccounts = () => {

    let social = [
        'www.example.com', 'www.facebook.com', 'www.twitter.com',
        'www.googleplus.com','www.instagram.com','www.pinterest.com',
        'www.linkedin.com','www.youtube.com'
    ];

    let socialAcc = social.map( s => <div className={styles.item}><a href="#http://www.example.com">{s}</a></div> )

    return <div className={styles.socialBlock}>
        {socialAcc}
    </div>
}