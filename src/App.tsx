import React from 'react';
import {Footer} from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";
import RoutesComponent from "./components/RoutesComponent/RoutesComponent";


let App = () => {
    return <>
        <HeaderContainer />
        <RoutesComponent />
        <Footer />
    </>
}

export default App;