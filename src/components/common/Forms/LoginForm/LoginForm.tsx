import {FormControlHOC} from "../../../../hocs/FormControl/FormControlHOC";
import InputCustom from "../../Input/InputCustom";
import CheckboxCustom from "../../Checkbox/CheckboxCustom";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../../../utils/validators";
import ButtonCustom from "../../Button/ButtonCustom";

let Input = FormControlHOC(InputCustom);
let Checkbox = FormControlHOC(CheckboxCustom);

const LoginForm: React.FC<InjectedFormProps> = (props: any) => {

    return <form onSubmit={props.handleSubmit}>
        <div><Field component={Input} type={'text'} validate={[required]} name={'email'}  /></div>
        <div><Field component={Input} type={'password'} name={'password'}  validate={[required]} /></div>
        <div><Field component={Checkbox} type={'checkbox'}  name={'remember'}/>remember</div>

        {
            props.error && <div style={{color:'pink'}}>{props.error}</div>
        }

        <ButtonCustom type={'submit'}>login</ButtonCustom>
    </form>
}


export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);