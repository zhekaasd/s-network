import s from "./Users.module.scss"
import {User} from "../../reducers/users-reducer";
import photo from "../../other/images/Screenshot_3.png";
import React from "react";
import {NavLink} from "react-router-dom";
import ButtonCustom from "../accets/buton/ButtonCustom";
import {AddItemForm} from "../../AddItemForm";
import MUIAddItemForm from "../accets/AddItemForm/MUIAddItemForm";


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

type FakeLocationType = {
    location: {
        country: {
            id: string
            title: string
            city: {
                id: string
                title: string
            }
        }
    }
}

type FakeItemUserType = User & FakeLocationType;

const fakeItemUser: FakeItemUserType[] = [
    {
        name: 'John Doe',
        id: 123,
        uniqueUrlName: 'johndoe123',
        photos: {
            small: '',
            large: ''
        },
        status: 'Status from John Doe',
        followed: false,
        location: {
            country: {title: 'Russia', id: '321', city: {id: '44', title: 'Moscow'}}
        }
    }
]

const UserItem: React.FC<UserItemPropsType> = (props) => {



    let totalPages = props.usersPage.totalUsersCount / props.usersPage.pageSize;
    let arrPages = [];

    for(let i = 1; i <= totalPages; i++) {
        arrPages.push(i);
    }


    let newArr: FakeItemUserType[] = props.usersPage.users.map( (item ) => {

        return {
            ...item,
            photos: {...item.photos},
            location: {
                country: {title: 'Russia', id: '321', city: {id: '44', title: 'Moscow'}}
            }}
    } );


    return  <div className={s.items}>




                        {
                            newArr.map(u => {

                                const followUser = () => {
                                    props.followUser(u.id);
                                }
                                const unfollowUser = () => {
                                    props.unfollowUser(u.id);
                                }



                                return <div key={u.id} className={s.item}>

                                        <div className={s.itemBackgroundImage}></div>

                                        <img src={u.photos.small ? u.photos.small : photo} alt="phhh"/>
                                        <div className={s.userData}>
                                            <h3>{u.name}</h3>
                                            <span>{u.location.country.city.title}</span>


                                            {
                                                u.followed ?
                                                    <ButtonCustom sizeButton={'small'} disabled={props.followingInProgress.some((id) => id === u.id)} onClick={unfollowUser}>
                                                        Unfollow</ButtonCustom>
                                                    : <ButtonCustom sizeButton={'small'} disabled={props.followingInProgress.some((id) => id === u.id)} onClick={followUser}>
                                                        Follow
                                                    </ButtonCustom>

                                            }



                                            <div className={s.line}></div>
                                            <NavLink to={'/profile/' + u.id}>view profile</NavLink>
                                        </div>
                                    </div>
                            })
                        }
                </div>
}

const UserItemMemo = React.memo(UserItem);
export default UserItemMemo;