import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store/store";
import {login} from "../../redux/reducers/auth-reducer";
import {LoginReduxForm} from "../../components/common/Forms/LoginForm/LoginForm";


const Login = (props: MapDispatchProps) => {

    const submit = (formData: any) => {
        console.log(formData);
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={submit} />
        </>
    );
};

type MapDispatchProps = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
export default connect<{}, MapDispatchProps, {}, AppStateType>(null, {
    login
})(Login);





