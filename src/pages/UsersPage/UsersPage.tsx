
import React, {useEffect} from "react";
import UserItem from "./UserItem/UserItem";
import ProfileMainInfoContainer from "../ProfilePage/ProfileMainInfo/ProfileMainInfoContainer";


/*--- css import ---*/
import s from "./UsersPage.module.scss"
import {User} from "../../reducers/users-reducer";
import Preloader from "../../components/common/Preloader/Preloader";
import Navigation from "../../components/common/Navigation/Navigation";

interface UsersPropsType {
    getUsers: (currentPage: number, pageSize: number) => void
    changePageNumberUsers: (pageNumber: number, pageSize: number) => void
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    usersPage: {
        users: User[],
        currentPage: number
        totalUsersCount: number
        pageSize: number
        isFetching: boolean
    }
    followingInProgress: number[]
}
export const UsersPage: React.FC<UsersPropsType> = (props) =>  {
/*
    if(props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((resp) => {
            debugger
            props.setUsers(resp.data.items);
        })
    }*/

    useEffect(() => {
        props.getUsers(props.usersPage.currentPage, props.usersPage.pageSize);
    }, [])


    const changePageNumber = (pageNumber: number) => {
        props.changePageNumberUsers(pageNumber, props.usersPage.pageSize);
    }



        let totalPages = props.usersPage.totalUsersCount / props.usersPage.pageSize;
        let arrPages = [];

        for(let i = 1; i <= totalPages; i++) {
            arrPages.push(i);
        }


        return <>
            <ProfileMainInfoContainer />
            <Navigation />


            <div className={s.usersContainer}>

                <h1 style={{fontSize: '74px'}}>USERS</h1>


                <div className={s.usersCurrentPage}>
                    {
                        arrPages.map((p, index) => <span key={index}
                                                         onClick={() => changePageNumber(p)}
                                                         className={props.usersPage.currentPage === p ? s.active : ''}>{p}</span>
                        )
                    }
                </div>

                {
                    props.usersPage.isFetching ? <Preloader/>
                        : <UserItem followUser={props.followUser} unfollowUser={props.unfollowUser}
                                    usersPage={props.usersPage} followingInProgress={props.followingInProgress}
                        />
                }
            </div>
        </>

}

export default UsersPage;