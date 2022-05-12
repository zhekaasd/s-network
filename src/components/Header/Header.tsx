import React from "react";
import {Link, NavLink} from "react-router-dom";
import {PATH} from "../RoutesComponent/RoutesComponent";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store/store";
import InputWithIcon from "../common/InputWithIcon/InputWithIcon";

/*--- import styles ---*/
import st from "./Header.module.scss";
import EmailIcon from "@mui/icons-material/Email";
import FeedIcon from "@mui/icons-material/Feed";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";


type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    id: number | null
    logout: () => void
}

export const Header: React.FC<HeaderPropsType> = React.memo(({login, isAuth, logout, ...restProps}) => {

    let profile = useSelector((state: AppStateType) => state.auth.profile);
    let id = useSelector((state: AppStateType) => state.auth.id);

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
                isAuth ? <>
                    <NavLink to={PATH.PROFILE + '/' + id} className={st.headerUserInfo}>
                        <img src={profile?.photos.small} alt="ava"/>
                        <> <h4>{login}</h4> <span>^</span> </>
                    </NavLink>
                    <div onClick={() => logout()} style={{cursor: 'pointer'}}>log out</div>
                </> : <NavLink className={st.headerUserInfo} to={PATH.LOGIN}><h4>login</h4></NavLink>
            }

        </div>
    </header>
});