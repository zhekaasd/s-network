import React from "react";
import {ProfileUserWithFakeLocationType} from "../../../redux/reducers/profile-reducer";
import ProfileStatus from "./ProfileStatus";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";
import ButtonCustom from "../../../components/common/Button/ButtonCustom";

/*--- styles import ---*/
import styles from "./ProfileMainInfo.module.scss";
import profilePhoto from "../../../accets/images/icons/users.png";
import myBanner from "../../../accets/images/backgrounds/my-banner.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";

type PMIPropsType = {
    profile: ProfileUserWithFakeLocationType | null
    status: string
    updateStatus: (status: string) => void
}


export const ProfileMainInfo:React.FC<PMIPropsType> = ({profile, ...restProps}) => {

/*--- First char nickname to up ---*/
    const toUpperFirstCharName = (name: string) => {
        return name.split('').map((char, index) => index === 0 ? char.toUpperCase() : char).join('')
    }

    const authId = useSelector((state: AppStateType) => state.auth.id);

    return <div className={styles.profileMainInfoContainer}>

        <div className={styles.profileBannerImp}>
    {/*--- Background banner ---*/}
            <div className={styles.banner}>
                <img src={profile?.userId === authId ? myBanner : profile?.backgroundBanner.banner} alt=""/>
            </div>

            <div className={styles.profileOwner}>
                <div className={styles.profileOwnerContainer}>
                    <img src={profile?.photos.small ? profile.photos.small : profilePhoto} alt=""/>

                    <div className={styles.ownerName}>
                        {/*<h3>{profile.fullName && toUpperFirstCharName(profile.fullName)}</h3>*/}
                        <h3>{profile?.fullName && toUpperFirstCharName(profile.fullName)}</h3>
                        <span> <LocationOnIcon fontSize={'small'} /> Member since August 2017</span>
                        {/*<p>{profile?.aboutMe ? profile?.aboutMe : 'About me...'}</p>*/}
                        <ProfileStatus status={restProps.status}
                                       updateStatus={restProps.updateStatus} />

                    </div>

                    <ButtonCustom onClick={() => alert('callback edit profile is calling')}>edit</ButtonCustom>
                </div>
            </div>

        </div>

    </div>

}

