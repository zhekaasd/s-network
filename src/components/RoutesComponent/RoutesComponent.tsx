import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePageContainer from "../../pages/HomePage/HomePageContainer";
import NotFound from "../../pages/NotFound/NotFound";
import Login from "../../pages/Login/Login";
import UsersPageContainer from "../../pages/UsersPage/UsersPageContainer";
import ProfilePageContainer from "../../pages/ProfilePage/ProfilePageContainer";
import ChatPageContainer from "../../pages/ChatPage/ChatPageContainer";


export const PATH = {
    PROFILE: "/profile",
    USERS: "/users",
    MESSAGES: "/messages",
    LOGIN: "/login",
    HOME: "/"
}

const RoutesComponent = () => {
    return (
        <>
            <Routes>
                {/*<Route path={'/*'} element={ <NotFound /> }  />*/}

                <Route path={'*'} element={<NotFound/>}/>

                <Route path={`${PATH.HOME}`} element={<HomePageContainer/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.USERS} element={<UsersPageContainer/>}/>
                <Route path={`${PATH.PROFILE}`} element={ <ProfilePageContainer  /> } />
                <Route path={`${PATH.PROFILE}/:id`} element={ <ProfilePageContainer  /> } />
                {/*<Route path={`${PATH.PROFILE}`} element={ <Navigate to={'/'} replace /> }  />*/}
                <Route path={`${PATH.MESSAGES}`} element={<ChatPageContainer/>}/>
                <Route path={`${PATH.MESSAGES}/:id`} element={<ChatPageContainer/>}/>
                {/*<Route path={`${PATH.MESSAGES}/*`} element={<NotFound /> }/>*/}
            </Routes>
        </>
    );
};

export default RoutesComponent;
