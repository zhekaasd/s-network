import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import InputCustom from "../../components/accets/components/input/InputCustom";
import {FormControlHOC} from "../../HOC/FormControlHOC";
import TextareaCustom from "../../components/accets/components/textarea/TextareaCustom";
import CheckboxCustom from "../../components/accets/components/checkbox/CheckboxCustom";
import ButtonCustom from "../../components/accets/components/buton/ButtonCustom";
import {Button} from "@mui/material";
import { required } from '../../utils/validators';


let Input = FormControlHOC(InputCustom);
let Textarea = FormControlHOC(TextareaCustom);
let Checkbox = FormControlHOC(CheckboxCustom);

const LoginForm: React.FC<InjectedFormProps> = (props: any) => {


/*    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={(props: WrappedFieldProps) => <InputCustom value={props.input.value} onChange={props.input.onChange} />} name={'login'} />
        </div>

        <div>
            <Field component={(props: WrappedFieldProps) => <InputCustom value={props.input.value} type={'password'}
                                                           onChange={props.input.onChange}/>} name={'password'} />
        </div>


        <div> <Field type={'checkbox'}  component={(props: WrappedFieldProps) => {
            return <CheckboxCustom checked={props.input.checked}
                                   onChange={props.input.onChange}
            >???</CheckboxCustom>
        }} name={'rememberMe'} />
        </div>
        <button>login</button>

    </form>*/

    return <form onSubmit={props.handleSubmit}>
        {/*<div><Field component={'input'} type={'text'} name={'login'}/></div>*/}
        <div><Field component={Input} type={'text'} validate={[required]} name={'login'}  /></div>
        <div><Field component={Input} type={'password'} name={'password'}  validate={[required]} /></div>
        <div><Field component={Checkbox} type={'checkbox'}  name={'remember'}/>remember</div>
        <ButtonCustom type={'submit'}>login</ButtonCustom>
    </form>
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);


const Login = () => {

    const submit = (formData: any) => {
        console.log(formData);
    }

    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={submit} />

        </>
    );
};

export default Login;





