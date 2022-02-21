import s from "./Users.module.scss"
import {User} from "../../reducers/users-reducer";
import React from "react";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";
import UserItem from "./UserItem";

interface UsersPropsType {
    setUsers: (users: User[]) => void
    followingToggle: (id: number) => void
    setTotalUsers: (value: number) => void
    changeCurrentPage: (page: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    usersPage: {
        users: User[],
        currentPage: number
        totalUsersCount: number
        pageSize: number
        isFetching: boolean
    }
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
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then((resp) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(resp.data.items);
                this.props.setTotalUsers(resp.data.totalCount);
        })
    }

    changePageNumber = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then((resp) => {
                this.props.toggleIsFetching(false);
                this.props.changeCurrentPage(pageNumber);
                this.props.setUsers(resp.data.items);
            })
    }

    render() {

        let totalPages = this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize;
        let arrPages = [];

        for(let i = 1; i <= totalPages; i++) {
            arrPages.push(i);
        }

        return <div className={s.container}>
            <h1 style={{fontSize: '74px'}}>USERS</h1>

            <div>
                {
                    arrPages.map((p, index) => <span key={index}
                                                     onClick={() => this.changePageNumber(p)}
                                                     className={this.props.usersPage.currentPage === p ? s.active : ''}>{p}</span>
                    )
                }
            </div>

            {
                this.props.usersPage.isFetching ? <Preloader/>
                    : <UserItem usersPage={this.props.usersPage} changePageNumber={this.changePageNumber}
                                followingToggle={this.props.followingToggle}
                    />
            }


        </div>
            }

}

export default UsersC;