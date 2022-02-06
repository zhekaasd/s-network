import React from 'react';
import {Header} from "./components/header/Header";
import {Route, Routes} from 'react-router-dom';
import {Footer} from "./components/footer/Footer";
import NewsPageContainer from "./components/newsPage/NewsPageContainer";
import ChatPageContainer from "./components/content/chatPage/ChatPageContainer";
import ProfileContainer from './components/content/profile/ProfileContainer';


let App = () => {
    return <>
        <Header/>
        <Routes>
            <Route path={'/timeline'} element={<NewsPageContainer /> }  />
            <Route path={'/profile'} element={ <ProfileContainer  /> } />
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