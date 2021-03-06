import React from 'react';
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {PATH} from "../../components/RoutesComponent/RoutesComponent";
import {AppStateType} from "../../redux/store/store";

type MSTPType = ReturnType<typeof mstp>;
const mstp = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

function withRedirect <T>(Component: React.ComponentType<T>) {
    const WrapperComponent = (props: MSTPType) => {

        let {isAuth, ...restProps} = props;

        return isAuth ?  <Component  {...restProps as T} /> : <Navigate to={PATH.LOGIN} />;
    }

    return connect<MSTPType, {}, {}, AppStateType>(mstp)(WrapperComponent);
};

export default withRedirect;