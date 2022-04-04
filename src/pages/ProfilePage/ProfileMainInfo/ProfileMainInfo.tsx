import React from "react";
import {ProfileUserType} from "../../../reducers/profile-reducer";


import styles from './ProfileMainInfo.module.scss';
//import s from "./UserProfile/UserProfile.module.scss";
import profilePhoto from "../../../other/images/1920x.webp";
import ButtonCustom from "../../../components/accets/buton/ButtonCustom";

type PMIPropsType = {
    profile: ProfileUserType | null
}


export const ProfileMainInfo:React.FC<PMIPropsType> = ({profile, ...restProps}) => {

    //let profileData = useSelector((state: AppStateType) => state.profilePage.profile);

    const name = profile?.fullName.split('')
        .map((char, index) => index === 0 ? char.toUpperCase() : char)
        .join('');


    return <div className={styles.profileMainInfoContainer}>

        <div className={styles.profileBannerImp}>
        {/*--- Background banner ---*/}
        <div className={styles.banner}></div>

        <div className={styles.profileOwner}>
            <div className={styles.profileOwnerContainer}>
                <img src={profile?.photos.small ? profile.photos.small : profilePhoto} alt=""/>

                <div className={styles.ownerName}>
                    <h3>{name ? name : 'John Doe'}</h3>
                    <span>Member since August 2017</span>
                    <span>Status</span>
                </div>

                <ButtonCustom onClick={() => alert('callback edit profile is calling')}/>
            </div>
        </div>

    </div>

    </div>
}

