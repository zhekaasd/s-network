

import React from 'react';
import {Route, Routes} from "react-router-dom";
import ChatPageContainer from "../../pages/ChatPage/ChatPageContainer";
import HomePageContainer from "../../pages/HomePage/HomePageContainer";
import ProfileContainer from "../../pages/ProfilePage/ProfilePageContainer";
import UsersPageContainer from "../../pages/UsersPage/UsersPageContainer";


export const PATH = {
    PROFILE: '/profile',
    USERS: '/users',
    MESSAGES: '/messages',
    LOGIN: '/login',
    HOME: '/',
}

const RoutesComponent = () => {
    return (
        <>
            <Routes>
                <Route path={PATH.HOME} element={ <HomePageContainer  />} />

                <Route path={PATH.PROFILE} element={ <ProfileContainer  /> } >
                    {/*<Route path={'/profile'} element={ <ProfileContainer  /> } >*/}
                    <Route path={':id'} element={ <ProfileContainer /> } />
                </Route>

                <Route path={PATH.USERS} element={ <UsersPageContainer  /> } />

                <Route path={PATH.MESSAGES} element={ <ChatPageContainer /> } >
                    <Route path={':id'} element={<ChatPageContainer /> } />
                    {/*<Route path={':id'} />*/}
                </Route>
            </Routes>
        </>
    );
};

export default RoutesComponent;
