import React from "react";
import './profile.scss'
import {Post} from "./Post";

export function Profile() {
    return <section>
        <div className='container'>
            <div className='mainContentWrapper'>
                <nav className='navigation'>
                    <ul>
                        <li><a href="">Profile</a> </li>
                        <li><a href="">Timeline</a> </li>
                        <li><a href="">Messages</a> </li>
                        <li><a href="">Users</a> </li>
                        <li><a href="">Music</a> </li>
                        <li><a href="">Other</a> </li>
                    </ul>
                </nav>


                <div className='row'>
                    <div className='content'>
                        <aside>
                            <div className='sideBlock'>
                                <div><a href="#http://www.example.com">www.example.com</a></div>
                                <div><a href="#http://www.facebook.com">www.facebook.com</a></div>
                                <div><a href="#http://www.twitter.com">www.twitter.com</a></div>
                                <div><a href="#http://www.googleplus.com">www.googleplus.com</a></div>
                                <div><a href="#http://www.instagram.com">www.instagram.com</a></div>
                                <div><a href="#http://www.pinterest.com">www.pinterest.com</a></div>
                                <div><a href="#http://www.linkedin.com">www.linkedin.com</a></div>
                                <div><a href="#http://www.youtube.com">www.youtube.com</a></div>
                            </div>
                        </aside>


                            <section>
                                <div className='posts'>
                                    <div className='addPost'>
                                        <div className='fieldEntry'>
                                            <div>
                                                <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/e8814a07-4262-4ceb-b65c-3816efa31e71/1920x" alt=""/>
                                            </div>
                                            <input placeholder='what is new, John?' type="text"/>
                                        </div>
                                        <div className='buttonAddPost'>
                                            <button>add</button>
                                        </div>

                                    </div>
                                    <div className='listPosts' >
                                        <Post />
                                        <Post />
                                        <Post />
                                        <Post />
                                        <Post />
                                    </div>
                                </div>
                            </section>

                        <aside>
                            <div className='sideBlock'>block3</div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

