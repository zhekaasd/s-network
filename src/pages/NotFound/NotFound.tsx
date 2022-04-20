import React from "react";
import {NavLink} from "react-router-dom";
import { PATH } from "../../components/RoutesComponent/RoutesComponent";

const NotFound = () => {
    return (
        <div>
            <h1>NOT FOUND</h1>
            <hr/>
            <h1>ERROR 404</h1>
            <NavLink to={PATH.HOME}> GO TO HOME PAGE </NavLink>
        </div>
    );
};

export default NotFound;