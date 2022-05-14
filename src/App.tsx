import React, {useEffect} from "react";
import {Footer} from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";
import RoutesComponent from "./components/RoutesComponent/RoutesComponent";
import {connect} from "react-redux";
import {AppStateType} from "./redux/store/store";
import {authorizationConfirmation} from "./redux/reducers/app-reducer";
import {compose} from "redux";

/*--- import styles ---*/
import pr from "./accets/images/1920x.webp";


type AppPropsType = {
    authorizationConfirmation: () => void
    authorized: boolean
}

const App: React.FC<AppPropsType> = (props) => {

    useEffect(() => {
        props.authorizationConfirmation();
    }, []);


    if (!props.authorized) {
        return <div>
            <img src={pr} alt=""/>
        </div>
    }

    return <>
        <HeaderContainer/>
        <RoutesComponent/>
        <Footer/>
    </>
}


type MapDispatchPropsType = {
    authorizationConfirmation: () => void
}

type MapStatePropsType = { authorized: boolean }
const MapStateToProps = (state: AppStateType): MapStatePropsType => ({
    authorized: state.app.authorized
})

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(MapStateToProps, {
        authorizationConfirmation
    })(App),
);