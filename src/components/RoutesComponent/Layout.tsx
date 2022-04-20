import React from 'react';
import ProfileMainInfoContainer from "../../pages/ProfilePage/ProfileMainInfo/ProfileMainInfoContainer";
import Navigation from "../common/Navigation/Navigation";
import {Route, Routes} from "react-router-dom";
import ProfileContainer from "../../pages/ProfilePage/ProfilePageContainer";
import UsersPageContainer from "../../pages/UsersPage/UsersPageContainer";
import ChatPageContainer from "../../pages/ChatPage/ChatPageContainer";

const Layout = () => {

    //let userId = useSelector((state: AppStateType) => state.auth.id);
    //let profile = useSelector((state: AppStateType) => state.auth.profile) as AuthUserProfileWithFakeLocation;


    return (
        <>
            <ProfileMainInfoContainer />
            <Navigation />

            <Routes>

                {/*http://localhost:3000/profile/23368*/}

                <Route index element={ <ProfileContainer /> } />
                <Route path={':id'} element={<ProfileContainer/>} />

                {/*<Route path={''} element={ <Navigate to={'9008'} /> }/>*/}
                {/*<Route path={`${PATH.PROFILE}/id:id`} element={ <ProfileContainer /> } />*/}


                <Route path={`messages`} element={<ChatPageContainer/>}/>
                <Route path={`messages/:id`} element={<ChatPageContainer/>}/>
            </Routes>

        </>
    );
};

export default Layout;