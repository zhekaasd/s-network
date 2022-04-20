import React from "react";
import st from "./Header.module.scss";
import {NavLink} from "react-router-dom";
import InputWithIcon from "../accets/components/inputWithIcon/InputWithIcon";
import EmailIcon from '@mui/icons-material/Email';
import FeedIcon from '@mui/icons-material/Feed';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import {PATH} from "../RoutesComponent/RoutesComponent";
import {useSelector} from "react-redux";
import {AppStateType} from "../../reducers/store";
import {AuthUserProfileWithFakeLocation} from "../../reducers/auth-reducer";
import { Link } from "react-router-dom";

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    id: number | null
    profile: AuthUserProfileWithFakeLocation | null
}

export const Header: React.FC<HeaderPropsType> = React.memo(({login, isAuth, ...restProps}) => {

    let profile = useSelector((state: AppStateType) => state.auth.profile);
    let id = useSelector((state: AppStateType) => state.auth.id);

    //console.log(profile);


    return <header>
        <div className={st.headerContainer}>

            <Link to={PATH.HOME}>
                <h1 className={st.headerLogotype}>LOGOTYPE</h1>
            </Link>

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
                isAuth ? <NavLink to={PATH.PROFILE + '/' + id} className={st.headerUserInfo}>
                    <img src={profile?.photos.small} alt="ava"/>
                    <> <h4>{login}</h4> <span>^</span> </>
                </NavLink> : <NavLink className={st.headerUserInfo} to={PATH.LOGIN}><h4>login</h4></NavLink>
            }

        </div>
    </header>
});