import React from "react";
import {Profile} from "./profile/Profile";
import {ProfileBanner} from "./profileBanner/ProfileBanner";
import {ProfileOwner} from "./profileOwner/ProfileOwner";
import "./main.scss";

export function Main() {
    return <main>
        <div className='main'>
            <ProfileBanner />
            <ProfileOwner />
            <Profile/>
        </div>
    </main>
}


