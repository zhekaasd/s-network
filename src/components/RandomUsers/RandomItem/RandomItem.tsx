import {NavLink} from "react-router-dom";
import {PATH} from "../../RoutesComponent/RoutesComponent";
import ButtonCustom from "../../common/Button/ButtonCustom";
import React from "react";

/*--- import styles ---*/
import st from "../randomUsers.module.scss";
import iconUser from "../../../accets/images/icons/users.png";


type RandomItemType = {
    name: string,
    photo: string,
    id: number,
    followed: boolean,
    unfollowUser: (id: number) => void
    followUser: (id: number) => void
    followingInProgress: number[]
}


export const RandomItem: React.FC<RandomItemType> = ({name, id, photo, followed, followingInProgress,
                                                     followUser, unfollowUser, ...restProps}) => {

    return <div className={st.randomUser}>

        <NavLink to={`${PATH.PROFILE}/${id}`} className={st.randomUserInfo}>
            <img src={photo ? photo : iconUser} alt="#"/>
            <p>{name}</p>
        </NavLink>

        {
            followed ?
                <ButtonCustom disabled={followingInProgress.some((id) => id === id)} sizeButton={'small'}
                              onClick={() => unfollowUser(id)}>Unfollow</ButtonCustom>
                : <ButtonCustom disabled={followingInProgress.some((id) => id === id)} sizeButton={'small'}
                                onClick={() => followUser(id)}>Follow</ButtonCustom>
        }
    </div>
}