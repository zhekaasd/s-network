import {ProfileUserType} from "../../../../reducers/profile-reducer";
import profilePhoto from "../../../../other/images/1920x.webp";
import React from "react";

import s from "./UserProfile.module.scss";
import ButtonCustom from "../../../accets/buton/ButtonCustom";


function UserProfile(props: { profile: ProfileUserType | null }) {

    const name = props.profile?.fullName.split('')
        .map((char, index) => index === 0 ? char.toUpperCase() : char)
        .join('');

    return <div className={s.profileBannerImp}>
{/*--- Background banner ---*/}
        <div className={s.banner}></div>

        <div className={s.profileOwner}>
            <div className={s.profileOwnerContainer}>
                <img src={props.profile?.photos.small ? props.profile.photos.small : profilePhoto} alt=""/>

                <div className={s.ownerName}>
                    <h3>{name ? name : 'John Doe'}</h3>
                    <span>Member since August 2017</span>
                    <span>Status</span>
                </div>

                <ButtonCustom onClick={() => alert('callback edit profile is calling')}/>
            </div>
        </div>

    </div>
}

export default UserProfile;