
import s from "./Users.module.scss"
import {followingToggle, setUsers, User} from "../../reducers/users-reducer";
import photo from "../../other/images/Screenshot_3.png";
import React, {useEffect, useState} from "react";
import axios from "axios";

interface UsersPropsType {
    users: User[]
    setUsers: (users: User[]) => void
    followingToggle: (id: number) => void
}
export class UsersC extends React.Component<UsersPropsType, any> {
/*
    if(props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((resp) => {
            debugger
            props.setUsers(resp.data.items);
        })
    }*/

    // useEffect(() => {
    //     debugger
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //         .then( (resp) => {
    //             props.setUsers(resp.data.items)
    //         })
    // }, )


    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((resp) => {
debugger
            this.props.setUsers(resp.data.items);
        })
    }

    render() {
        return <div className={s.container}>
            <h1 style={{fontSize: '74px'}}>USERS</h1>

            <div style={{display: 'flex', justifyContent: 'center'}}>


                return <div className={s.wrapper}>
                {
                    this.props.users.map( u => <div className={s.user}>
                        <div style={{height: '100px', backgroundColor: 'gray'}}></div>

                        {/*<img src={u.photos.small ? u.photos.small : photo} alt="phhh"/>*/}
                        <div className={s.userData}>
                            <p>{u.name}</p>
                            <span>{u.status}</span>
                            {/*<span>location</span>*/}

                            {
                                u.followed ?
                                    <button onClick={() => this.props.followingToggle(u.id)} style={{display: 'block'}}>Unfollow</button>
                                    : <button onClick={() => this.props.followingToggle(u.id)} style={{display: 'block'}}>Follow</button>
                            }

                            <div style={{border: '1px solid gray', width: '100%', margin: '6px 0'}}></div>
                            <a href="#######">view profile</a>
                        </div>
                    </div>)
                }
            </div>

            </div>
        </div>
            }

}

export default UsersC;


{/*type UserItemPropsType = {*/}
{/*    user: User*/}
{/*    followingToggle: (id: number) => void*/}
{/*}*/}

{/*const UserItem: React.FC<UserItemPropsType> = (props) => {*/}
{/*    let [st, setSt] = useState<boolean>(false);*/}
{/*    console.log(props.user);*/}


{/*    </div>*/}
{/*}*/
}