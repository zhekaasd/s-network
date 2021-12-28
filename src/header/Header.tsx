import React from "react";
import "./header.scss";

export function Header() {
    return <header>
        <div className='container'>

            <div className='row'>



                    <div className='logoHeader'>
                        <img src="" alt=""/>
                        <h2>LogoTitle</h2>
                    </div>

                    <nav>
                        <div className='navigation'>
                            <ul>
                                <li>Text1</li>
                                <li>Text1</li>
                                <li>Text1</li>
                            </ul>
                        </div>
                    </nav>

                    <div className='searchBlock'>
                        <input type="text" placeholder='search'/>
                        <button> search</button>
                    </div>

                    <div className='userInfo'>
                        <img src="" alt=""/>
                        <span>John Doe</span>
                    </div>
            </div>
        </div>
    </header>
}