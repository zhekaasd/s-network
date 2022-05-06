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
        </>
    );
};

export default Login;