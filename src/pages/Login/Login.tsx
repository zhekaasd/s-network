import React from 'react';

import styles from './Login.module.scss';
import InputCustom from "../../components/accets/components/input/InputCustom";
import ButtonCustom from "../../components/accets/components/buton/ButtonCustom";

const Login = () => {
    return (
        <>
            <h1>LOGIN</h1>
            <div className={styles.loginContainer}>


                <InputCustom />
                <InputCustom />
                <input type={'checkbox'} />
                <ButtonCustom>login</ButtonCustom>

            </div>


            <form >
                <div><input type="text" placeholder={'login'}/></div>
                <div><input type="password" placeholder={'password'}/></div>
                <div><input type="checkbox"/>remeber me</div>
                <button>login</button>
            </form>
        </>
    );
};

export default Login;