import React from 'react';
import {Header} from "./components/header/Header";
import {Route, Routes} from 'react-router-dom';
import {Footer} from "./components/footer/Footer";
import NewsPageContainer from "./components/newsPage/NewsPageContainer";
import ChatPageContainer from "./components/content/chatPage/ChatPageContainer";
import ProfileContainer from './components/content/profile/ProfileContainer';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";


let App = () => {
    return <>
        <HeaderContainer />
        <Routes>
            <Route path={'/timeline'} element={<NewsPageContainer /> }  />
            <Route path={'/profile'} element={ <ProfileContainer /> } >
            {/*<Route path={'/profile'} element={ <ProfileContainer  /> } >*/}
                <Route path={':id'} element={ <ProfileContainer /> } />
            </Route>


            <Route path={'/users'} element={ <UsersContainer  /> } />



            <Route path={'/messages'} element={ <ChatPageContainer /> } >
                {/*<Route path={':id'} element={<ChatPageContainer /> } />*/}
                <Route path={':id'} />
            </Route>
            <Route path={'/'} element={ <NewsPageContainer  /> } />
        </Routes>

        <Footer />
    </>
}

export default App;