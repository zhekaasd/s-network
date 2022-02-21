import s from "./Users.module.scss"
import {User} from "../../reducers/users-reducer";
import photo from "../../other/images/Screenshot_3.png";
import React from "react";
import Preloader from "../common/Preloader/Preloader";


type UserItemPropsType = {
    usersPage: {
        users: User[],
        currentPage: number
        totalUsersCount: number
        pageSize: number
        isFetching: boolean
    }
    followingToggle: (id: number) => void
    changePageNumber: (page: number) => void
}

const UserItem: React.FC<UserItemPropsType> = (props) => {



    let totalPages = props.usersPage.totalUsersCount / props.usersPage.pageSize;
    let arrPages = [];

    for(let i = 1; i <= totalPages; i++) {
        arrPages.push(i);
    }

    return props.usersPage.isFetching ? <Preloader/>
                : <div style={{display: 'flex', justifyContent: 'center'}}>

                    <div className={s.wrapper}>
                        {
                            props.usersPage.users.map(u => {

                                const followingToggleHandler = () => {
                                    props.followingToggle(u.id);
                                }

                                return <div className={s.item}>
                                    <div className={s.user}>
                                        <div style={{height: '86px', backgroundColor: 'gray'}}></div>

                                        <img src={u.photos.small ? u.photos.small : photo} alt="phhh"/>
                                        <div className={s.userData}>
                                            <p>{u.name}</p>
                                            <span>{u.status ? u.status : ':]'}</span>
                                            {/*<span>location</span>*/}

                                            {
                                                u.followed ?
                                                    <button onClick={followingToggleHandler}
                                                            style={{display: 'block'}}>Unfollow</button>
                                                    : <button onClick={followingToggleHandler}
                                                              style={{display: 'block'}}>Follow</button>
                                            }

                                            <div style={{border: '1px solid gray', width: '100%', margin: '6px 0'}}></div>
                                            <a href="#######">view profile</a>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
}

export default UserItem;