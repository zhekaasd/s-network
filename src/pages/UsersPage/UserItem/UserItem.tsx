
import photo from "../../../other/images/Screenshot_3.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {User} from "../../../reducers/users-reducer";
import ButtonCustom from "../../../components/accets/buton/ButtonCustom";

/*--- css import ---*/
import styles from "./UserItem.module.scss";

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

type FakeLocationUserType = User & {
    location: {
        id: string
        title: string
    }
}

function randomNumber() {
    let randomN = (Math.floor(Math.random() * 10));
    return randomN > 4 ? randomN - 5 : randomN;
}


const getRandomLocationCity = () => {

    const randomCountryNumber = randomNumber();
    const randomCityNumber = randomNumber();

    const usersWithFakeLocation = [
        {id: 0, country: 'Russia', cities: [
                {id: 0, title: 'Moscow'},
                {id: 1, title: 'Saint Petersburg'},
                {id: 2, title: 'Novosibirsk'},
                {id: 3, title: 'Yekaterinburg'},
                {id: 4, title: 'Kaliningrad'},
            ]},
        {id: 1, country: 'Belarus', cities: [
                {id: 0, title: 'Minsk'},
                {id: 1, title: 'Gomel'},
                {id: 2, title: 'Mogilev'},
                {id: 3, title: 'Vitebsk'},
                {id: 4, title: 'Grodno'},
            ]},
        {id: 2, country: 'Ukraine', cities: [
                {id: 0, title: 'Kyiv'},
                {id: 1, title: 'Odessa'},
                {id: 2, title: 'Yalta'},
                {id: 3, title: 'Poltava'},
                {id: 4, title: 'Kherson'},
            ]},
        {id: 3, country: 'Kazakhstan', cities: [
                {id: 0, title: 'Almaty'},
                {id: 1, title: 'Shymkent'},
                {id: 2, title: 'Karaganda'},
                {id: 3, title: 'Nur-Sultan'},
                {id: 4, title: 'Pavlodar'},
            ]},
        {id: 4, country: 'Armenia', cities: [
                {id: 0, title: 'Yerevan'},
                {id: 1, title: 'Gyumri'},
                {id: 2, title: 'Vagharshapat'},
                {id: 3, title: 'Abovyan'},
                {id: 4, title: 'Artashat'},
            ]},
    ];

    let getLocation = usersWithFakeLocation.find(el => el.id === randomCountryNumber);
    let getCountry;

    if (getLocation) {
        getCountry = getLocation.cities.find( city => city.id === randomCityNumber);
    }


    return getCountry;

}



const UserItem: React.FC<UserItemPropsType> = (props) => {



    let totalPages = props.usersPage.totalUsersCount / props.usersPage.pageSize;
    let arrPages = [];

    for(let i = 1; i <= totalPages; i++) {
        arrPages.push(i);
    }


    let newArr = props.usersPage.users.map( (item ) => {

        return {
            ...item,
            photos: {...item.photos},
            location: getRandomLocationCity()
        }
    } );


    return  <div className={styles.items}>




                        {
                            newArr.map(u => {

                                const followUser = () => {
                                    props.followUser(u.id);
                                }
                                const unfollowUser = () => {
                                    props.unfollowUser(u.id);
                                }


                                return <div key={u.id} className={styles.item}>

                                        <div className={styles.itemBackgroundImage}></div>

                                        <img src={u.photos.small ? u.photos.small : photo} alt="phhh"/>
                                        <div className={styles.userData}>
                                            <h3>{u.name}</h3>
                                            <span>{u.location && u.location.title}</span>


                                            {
                                                u.followed ?
                                                    <ButtonCustom sizeButton={'small'} disabled={props.followingInProgress.some((id) => id === u.id)} onClick={unfollowUser}>
                                                        Unfollow</ButtonCustom>
                                                    : <ButtonCustom sizeButton={'small'} disabled={props.followingInProgress.some((id) => id === u.id)} onClick={followUser}>
                                                        Follow
                                                    </ButtonCustom>

                                            }



                                            <div className={styles.line}></div>
                                            <NavLink to={'/profile/' + u.id}>view profile</NavLink>
                                        </div>
                                    </div>
                            })
                        }
                </div>
}

const UserItemMemo = React.memo(UserItem);
export default UserItemMemo;