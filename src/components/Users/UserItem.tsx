import s from "./Users.module.scss"
import {User} from "../../reducers/users-reducer";
import photo from "../../other/images/Screenshot_3.png";
import React from "react";
import {NavLink} from "react-router-dom";


type UserItemPropsType = {
    usersPage: {
        users: User[],
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




    return <div style={{display: 'flex', justifyContent: 'center'}}>

                    <div className={s.wrapper}>
                        {
                            props.usersPage.users.map(u => {

                                const followUser = () => {
                                    props.followUser(u.id);
                                }
                                const unfollowUser = () => {
                                    props.unfollowUser(u.id);
                                }

                                return <div key={u.id} className={s.item}>
                                    <div className={s.user}>
                                        <div style={{height: '86px', backgroundColor: 'gray'}}></div>

                                        <img src={u.photos.small ? u.photos.small : photo} alt="phhh"/>
                                        <div className={s.userData}>
                                            <p>{u.name}</p>
                                            <span>{u.status ? u.status : ':]'}</span>
                                            {/*<span>location</span>*/}

                                            {
                                                u.followed ?
                                                    <button disabled={props.followingInProgress.some((id) => id === u.id)} onClick={unfollowUser}
                                                            style={{display: 'block'}}>Unfollow</button>
                                                    : <button disabled={props.followingInProgress.some((id) => id === u.id)} onClick={followUser}
                                                              style={{display: 'block'}}>Follow</button>
                                            }

                                            <div style={{border: '1px solid gray', width: '100%', margin: '6px 0'}}></div>
                                            <NavLink to={'/profile/' + u.id}>view profile</NavLink>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
}

export default UserItem;