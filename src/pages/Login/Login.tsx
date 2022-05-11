import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import InputCustom from "../../components/accets/components/input/InputCustom";
import {FormControlHOC} from "../../HOC/FormControlHOC";
import TextareaCustom from "../../components/accets/components/textarea/TextareaCustom";
import CheckboxCustom from "../../components/accets/components/checkbox/CheckboxCustom";
import ButtonCustom from "../../components/accets/components/buton/ButtonCustom";
import {Button} from "@mui/material";
import { required } from '../../utils/validators';
import {connect} from "react-redux";
import { login } from '../../reducers/auth-reducer';
import {AppStateType} from "../../reducers/store";


let Input = FormControlHOC(InputCustom);
let Textarea = FormControlHOC(TextareaCustom);
let Checkbox = FormControlHOC(CheckboxCustom);

const LoginForm: React.FC<InjectedFormProps> = (props: any) => {

    return <form onSubmit={props.handleSubmit}>
        {/*<div><Field component={'input'} type={'text'} name={'login'}/></div>*/}
        <div><Field component={Input} type={'text'} validate={[required]} name={'email'}  /></div>
        <div><Field component={Input} type={'password'} name={'password'}  validate={[required]} /></div>
        <div><Field component={Checkbox} type={'checkbox'}  name={'remember'}/>remember</div>

        {
            props.error && <div style={{color:'pink'}}>{props.error}</div>
        }

        <ButtonCustom type={'submit'}>login</ButtonCustom>
    </form>
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);


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





