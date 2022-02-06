import React from "react";
import style from "./header.module.scss";

export function Header() {
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

                    <div className={style.userInfo}>
                        <img src="" alt="" />
                        <span>John Doe</span>
                    </div>
            </div>
        </div>
    </header>
}