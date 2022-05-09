import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


const LoginForm: React.FC<InjectedFormProps> = (props) => {



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

    return         <form onSubmit={props.handleSubmit}>
        <div><Field component={'input'} type={'text'} name={'login'}/></div>
        <div><Field component={'input'} type={'password'} name={'password'}/></div>
        <div><Field component={'input'} type={'checkbox'} name={'remember'}/>remember</div>
        <button>login</button>
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




