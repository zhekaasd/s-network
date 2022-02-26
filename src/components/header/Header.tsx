import React from "react";
import style from "./header.module.scss";
import {NavLink} from "react-router-dom";

export function Header(props: {login: string | null, isAuth: boolean}) {
    return <header>
        <div className={style.container}>

            <div className={style.headerItems}>


                    <div className={style.logoHeader}>
                        <img src="" alt=""/>
                        <h2>LogoTitle</h2>
                    </div>

                    <nav>
                        <div className={style.navigation}>
                            <ul>
                                <li>Text1</li>
                                <li>Text1</li>
                                <li>Text1</li>
                            </ul>
                        </div>
                    </nav>

                    <div className={style.searchBlock}>
                        <input type="text" placeholder='search'/>
                        <button> search</button>
                    </div>

                {
                    props.isAuth ? <div className={style.userInfo}>
                            <img src="" alt="" />
                            <span>{props.login}</span>
                        </div> : <NavLink to={'/login'}>login</NavLink>
                }

            </div>
        </div>
    </header>
}