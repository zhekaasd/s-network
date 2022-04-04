import React from "react";
import st from "./header.module.scss";
import {NavLink} from "react-router-dom";
import InputWithIcon from "../accets/inputWithIcon/InputWithIcon";
import EmailIcon from '@mui/icons-material/Email';
import FeedIcon from '@mui/icons-material/Feed';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

import avatar from "../../other/images/Screenshot_3.png";
import {PATH} from "../RoutesComponent/RoutesComponent";

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
}

export const Header: React.FC<HeaderPropsType> = React.memo(({login, isAuth, ...restProps}) => {
    return <header>
        <div className={st.headerContainer}>

            <a href="/">
                <h1 className={st.headerLogotype}>LOGOTYPE</h1>
            </a>

            <nav className={st.headerNavigation}>
                <NavLink to={PATH.HOME}><FeedIcon className={st.itemIcon} color={"primary"}/></NavLink>
                <NavLink to={PATH.MESSAGES}><EmailIcon className={st.itemIcon} color={"primary"}/></NavLink>
                <NavLink to={PATH.USERS}><SearchIcon color={"primary"} className={`${st.searchIcon} ${st.itemICon}`}/></NavLink>
            </nav>

            <nav className={st.headerBurger}>
                <MenuIcon/>
            </nav>

            <div className={st.headerSearchBlock}>
                <InputWithIcon />
            </div>

            {
                isAuth ? <NavLink to={PATH.PROFILE} className={st.headerUserInfo}>
                    <img src={avatar} alt=""/>
                    <> <h4>{login}</h4> <span>^</span> </>
                </NavLink> : <NavLink className={st.headerUserInfo} to={PATH.LOGIN}><h4>login</h4></NavLink>
            }

        </div>
    </header>
});