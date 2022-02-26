import {ProfileUserType} from "../../../../reducers/profile-reducer";
import profilePhoto from "../../../../other/images/1920x.webp";
import React from "react";

import s from "./UserProfile.module.scss";


function UserProfile(props: { profile: ProfileUserType | null }) {

    const name = props.profile?.fullName.split('')
        .map( (char, index) => index === 0 ? char.toUpperCase() : char)
        .join('');

    return <div className={s.profileBannerImp}>
        <div className={s.profileBanner}>

            <div className={s.banner}>
            </div>
        </div>



        <div className={s.profileOwner}>
            <div className={s.profileOwnerWrapper}>
                <div className={s.container}>


                    <div className={s.profilePhoto}>
                                <img src={props.profile?.photos.small ? props.profile.photos.small : profilePhoto} alt=""/>
                    </div>


                    <div className={s.ownerName}>

                        <h2>{name ? name : 'John Doe'}</h2>
                        <span>Member since August 2017</span>
                        <span>
                        <i>
                            Location
                        </i>
                    </span>
                    </div>

                    <div className={s.editProfileButton}>
                        <button>edit</button>
                    </div>

                </div>
            </div>
        </div>

    </div>
}

export default UserProfile;