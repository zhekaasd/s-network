import React, {useEffect} from "react";
import UserItem from "./UserItem/UserItem";


/*--- css import ---*/
import s from "./UsersPage.module.scss";
import Preloader from "../../components/common/Preloader/Preloader";
import {UserWithFakeLocation} from "../../redux/reducers/users-reducer";

interface UsersPropsType {
    getUsers: (currentPage: number, pageSize: number) => void
    changePageNumberUsers: (pageNumber: number, pageSize: number) => void
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    usersPage: {
        users: UserWithFakeLocation[],
        currentPage: number
        totalUsersCount: number
        pageSize: number
        isFetching: boolean
    }
    followingInProgress: number[]
}

export const UsersPage: React.FC<UsersPropsType> = ({usersPage, ...props}) => {
    /*
        if(props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((resp) => {
                debugger
                props.setUsers(resp.data.items);
            })
        }*/


    //const usersPage = useSelector((state: AppStateType) => state.usersPage);


    useEffect(() => {
        props.getUsers(usersPage.currentPage, usersPage.pageSize);
    }, [usersPage.currentPage, usersPage.pageSize])


    const changePageNumber = (pageNumber: number) => {
        props.changePageNumberUsers(pageNumber, usersPage.pageSize);
    }


    let totalPages = Math.ceil(usersPage.totalUsersCount / usersPage.pageSize);
    let arrPages = [];

    for (let i = 1; i <= totalPages; i++) {
        arrPages.push(i);
    }


    return <>
        {/*<ProfileMainInfoContainer />*/}
        {/*<Navigation />*/}


        <div className={s.usersContainer}>

            <h1 style={{fontSize: '74px'}}>USERS</h1>


            <div className={s.usersCurrentPage}>
                {
                    arrPages.map((p, index) => <span key={index}
                                                     onClick={() => changePageNumber(p)}
                                                     className={usersPage.currentPage === p ? s.active : ''}>{p}</span>
                    )
                }
            </div>

            {
                usersPage.isFetching ? <Preloader/>
                    : <UserItem followUser={props.followUser} unfollowUser={props.unfollowUser}
                                usersPage={usersPage}
                                followingInProgress={props.followingInProgress}
                    />
            }
        </div>
    </>

}

export default UsersPage;