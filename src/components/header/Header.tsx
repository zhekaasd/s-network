import React from "react";
import st from "./header.module.scss";
import {NavLink} from "react-router-dom";
import InputWithIcon from "../accets/inputWithIcon/InputWithIcon";
import EmailIcon from '@mui/icons-material/Email';
import FeedIcon from '@mui/icons-material/Feed';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

import avatar from "../../other/images/Screenshot_3.png";

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
}
export const Header: React.FC<HeaderPropsType> = React.memo(({login, isAuth, ...restProps}) => {
    return <header>
        <div className={st.headerContainer}>

            <a href="/">
                <h2 className={st.headerLogotype}>LogoTitle</h2>
            </a>

            <nav className={st.headerNavigation}>
                <FeedIcon />
                <EmailIcon />
                <SearchIcon className={st.searchIcon} />
            </nav>

            <nav className={st.headerBurger}>
                <MenuIcon />
            </nav>

            <div className={st.headerSearchBlock}>
                <InputWithIcon/>
            </div>


            {
                isAuth ? <NavLink to={'/profile'} className={st.headerUserInfo}>
                        <img src={avatar} alt=""/>
                    <div>{login}</div>
                </NavLink> : <NavLink to={'/login'}>login</NavLink>
            }

        </div>
    </header>
});