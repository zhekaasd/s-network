import React from "react";
import {ProfileUserWithFakeLocationType} from "../../../reducers/profile-reducer";
import ButtonCustom from "../../../components/accets/components/buton/ButtonCustom";


import styles from './ProfileMainInfo.module.scss';
import profilePhoto from "../../../other/images/icon/users.png";
import myBanner from "../../../other/images/background/my-banner.jpg";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ProfileStatusFn from "./ProfileStatusFn";

type PMIPropsType = {
    profile: ProfileUserWithFakeLocationType | null
    status: string
    updateStatus: (status: string) => void
}


export const ProfileMainInfo:React.FC<PMIPropsType> = ({profile, ...restProps}) => {



    const toUpperFirstCharName = (name: string) => {
        return name.split('').map((char, index) => index === 0 ? char.toUpperCase() : char).join('')
    }


    return <div className={styles.profileMainInfoContainer}>

        <div className={styles.profileBannerImp}>
    {/*--- Background banner ---*/}
            <div className={styles.banner}>
                <img src={profile?.userId === 9008 ? myBanner : profile?.backgroundBanner.banner} alt=""/>
            </div>

            <div className={styles.profileOwner}>
                <div className={styles.profileOwnerContainer}>
                    <img src={profile?.photos.small ? profile.photos.small : profilePhoto} alt=""/>

                    <div className={styles.ownerName}>
                        {/*<h3>{profile.fullName && toUpperFirstCharName(profile.fullName)}</h3>*/}
                        <h3>{profile?.fullName && toUpperFirstCharName(profile.fullName)}</h3>
                        <span> <LocationOnIcon fontSize={'small'} /> Member since August 2017</span>
                        {/*<p>{profile?.aboutMe ? profile?.aboutMe : 'About me...'}</p>*/}
                        <ProfileStatusFn status={restProps.status}
                                       updateStatus={restProps.updateStatus} />

                    </div>

                    <ButtonCustom onClick={() => alert('callback edit profile is calling')}>edit</ButtonCustom>
                </div>
            </div>

        </div>

    </div>

}

