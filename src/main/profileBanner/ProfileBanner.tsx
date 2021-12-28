import React from "react";
import profilePhoto from "../../other/images/1920x.webp";
import "./profileBanner.scss";

export function ProfileBanner() {
    return <div className='profileBanner'>

        <div className='banner'>
        </div>


        <div className='profilePhoto'>
                <div className='container'>
                    <div className='photo'>
                        <img src={profilePhoto} alt=""/>
                    </div>
                </div>
        </div>
    </div>
}