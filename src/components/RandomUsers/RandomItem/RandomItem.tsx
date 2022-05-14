import {NavLink} from "react-router-dom";
import {PATH} from "../../RoutesComponent/RoutesComponent";
import ButtonCustom from "../../common/Button/ButtonCustom";
import React from "react";

/*--- import styles ---*/
import st from "../RandomUsers.module.scss";
import iconUser from "../../../accets/images/icons/users.png";
import {IconButton} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


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
                <div className={st.unfollow}>
                    <IconButton disabled={followingInProgress.some((userId) => userId === id)}
                                onClick={() => unfollowUser(id)}>
                        <RemoveCircleIcon />
                    </IconButton>
                </div>
                : <div className={st.follow}>
                    <IconButton disabled={followingInProgress.some((userId) => userId === id)}
                                onClick={() => followUser(id)}>
                        <CheckCircleIcon />
                    </IconButton>
                </div>


                // <ButtonCustom disabled={followingInProgress.some((userId) => userId === id)} sizeButton={'small'}
                //               onClick={() => unfollowUser(id)}>Unfollow</ButtonCustom>
                // : <ButtonCustom disabled={followingInProgress.some((userId) => userId === id)} sizeButton={'small'}
                //                 onClick={() => followUser(id)}>+</ButtonCustom>
        }
    </div>
}