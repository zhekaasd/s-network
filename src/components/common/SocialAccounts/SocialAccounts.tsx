import styles from "./SocialAccounts.module.scss";
import React from "react";

import FacebookIcon from '@mui/icons-material/Facebook';

export const SocialAccounts = () => {

    let social = [
        'www.example.com', 'www.facebook.com', 'www.twitter.com',
        'www.googleplus.com','www.instagram.com','www.pinterest.com',
        'www.linkedin.com','www.youtube.com', 'www.lastitem.com'
    ];

    let socialAcc = social.map( s => <a className={styles.item} href="#http://www.example.com">
        <FacebookIcon />
        <span>{s}</span>
    </a> )

    return <div className={styles.socialBlock}>
        {socialAcc}
    </div>
}