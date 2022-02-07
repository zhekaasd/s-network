
import s from "./Users.module.scss"
import {followingToggle, setUsers, User} from "../../reducers/users-reducer";
import photo from "../../other/images/Screenshot_3.png";
import React, {useEffect, useState} from "react";
import axios from "axios";

type UsersPropsType = {
    users: User[]
    setUsers: (users: User[]) => void
    followingToggle: (id: number) => void
}
export const Users = (props: UsersPropsType) => {


    useEffect(() => {
        // axios.get('https://social-network.samuraijs.com/api/1.0/users?count=12')
        //     .then( (resp) => {
        //         props.setUsers(resp.data.items)
        //     })
        props.setUsers([
            {
                "name": "zhmenkaya",
                "id": 22327,
                "uniqueUrlName": '',
                "photos": {
                    "small": '',
                    "large": ''
                },
                "status": '',
                "followed": false
            },
            {
                "name": "Vahe134",
                "id": 22326,
                "uniqueUrlName": '',
                "photos": {
                    "small": '',
                    "large": ''
                },
                "status": '',
                "followed": false
            },
            {
                "name": "weeny",
                "id": 22325,
                "uniqueUrlName": '',
                "photos": {
                    "small": '',
                    "large": ''
                },
                "status": '',
                "followed": false
            },
            {
                "name": "weeny-",
                "id": 22324,
                "uniqueUrlName": '',
                "photos": {
                    "small": '',
                    "large": ''
                },
                "status": '',
                "followed": false
            }
        ]);
    }, [])

    return <div className={s.container}>
        <h1 style={{fontSize: '74px'}}>USERS</h1>

        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
            {
                props.users.map( u => <UserItem followingToggle={props.followingToggle} key={u.id} user={u} /> )
            }
        </div>

    </div>
}

type UserItemPropsType = {
    user: User
    followingToggle: (id: number) => void
}

const UserItem: React.FC<UserItemPropsType> = (props) => {
    console.log(props.user);

    const click = () => {
        props.followingToggle(props.user.id)
    }

    return <div className={s.wrapper}>


        <div className={s.user}>
            <div style={{height: '100px', backgroundColor: 'gray'}}></div>

            <img src={props.user.photos.small ? props.user.photos.small : photo} alt="phhh"/>
            <div className={s.userData}>
                <p>{props.user.name}</p>
                <span>{props.user.status}</span>
                {/*<span>location</span>*/}

                {
                    props.user.followed ?
                        <button onClick={click} style={{display: 'block'}}>Unfollow</button>
                        : <button onClick={click} style={{display: 'block'}}>Follow</button>
                }

                <div style={{border: '1px solid gray', width: '100%', margin: '6px 0'}}></div>
                <a href="#######">view profile</a>
            </div>
        </div>
    </div>
}