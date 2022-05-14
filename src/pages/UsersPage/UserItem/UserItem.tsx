import React from "react";
import {NavLink} from "react-router-dom";
import {UserWithFakeLocation} from "../../../redux/reducers/users-reducer";
import {Line} from "../../../components/common/Line/Line";
import ButtonCustom from "../../../components/common/Button/ButtonCustom";

/*--- css import ---*/
import styles from "./UserItem.module.scss";
import photo from "../../../accets/images/icons/users.png";


type UserItemPropsType = {
    usersPage: {
        users: UserWithFakeLocation[],
        currentPage: number
        totalUsersCount: number
        pageSize: number
        isFetching: boolean
    }
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    followingInProgress: number[]

}

const UserItem: React.FC<UserItemPropsType> = (props) => {


    let totalPages = props.usersPage.totalUsersCount / props.usersPage.pageSize;
    let arrPages = [];

    for(let i = 1; i <= totalPages; i++) {
        arrPages.push(i);
    }


    return  <div className={styles.items}>


        {
            props.usersPage.users.map(u => {

                const followUser = () => {
                    props.followUser(u.id);
                }
                const unfollowUser = () => {
                    props.unfollowUser(u.id);
                }


                return <div key={u.id} className={styles.item}>

                    <div className={styles.itemBackgroundImage}>
                        <img src={u.backgroundBanner.banner} alt=""/></div>



                    <img src={u.photos.small ? u.photos.small : photo} alt="phhh"/>
                    <div className={styles.userData}>
                        <h3>{u.name}</h3>
                        <span>{u.locationUser && u.locationUser.title}</span>

                        {
                            u.followed ?
                                <ButtonCustom sizeButton={'small'}
                                              disabled={props.followingInProgress.some((id) => id === u.id)}
                                              onClick={unfollowUser}>
                                    Unfollow</ButtonCustom>
                                : <ButtonCustom sizeButton={'small'}
                                                disabled={props.followingInProgress.some((id) => id === u.id)}
                                                onClick={followUser}>
                                    Follow
                                </ButtonCustom>

                        }


                        <Line/>
                        <NavLink to={'/profile/' + u.id}>view profile</NavLink>
                    </div>
                </div>
            })
        }
                </div>
}

const UserItemMemo = React.memo(UserItem);
export default UserItemMemo;