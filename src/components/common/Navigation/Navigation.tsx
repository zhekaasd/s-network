import {NavLink, useParams} from "react-router-dom";
import React from "react";
import {PATH} from "../../RoutesComponent/RoutesComponent";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";

/*--- styles import ---*/
import st from "./Navigation.module.scss";

type ArrNavigationType = {
    id: number
    title: string
    path: string
}

function Navigation() {

    let authId = useSelector((state: AppStateType) => state.auth.id);
    let {id} = useParams();
    const paramId = Number(id);

    const arrNavigation: ArrNavigationType[] = [
        {id: 1, title: 'Profile', path: `${PATH.PROFILE}/${authId}`},
        {id: 3, title: 'Messages', path: `${PATH.MESSAGES}`},
        {id: 4, title: 'Users', path: `${PATH.USERS}`},
    ]

/*--- change display navigation panel ---*/
    return authId === paramId || !paramId ? <nav className={st.navigationContainer}>
        {
            arrNavigation.map((el) => <NavLink
                className={({isActive}) => isActive ? `${st.active} ${st.item}` : st.item}
                key={el.id}
                to={el.path}
            >{el.title}</NavLink>)
        }
    </nav> : <></>;
}

export default Navigation;