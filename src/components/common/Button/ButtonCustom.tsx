import React from 'react';

/*--- import styles ---*/
import s from "./ButtonCustom.module.scss";
import {Button} from "@mui/material";

type ButtonCustomPropsType = {
    onClick?: () => void
    disabled?: boolean
    sizeButton?: "small" | "medium" | "large"
    /*-- test onSubmit ?!?!?!?!? --*/
    onSubmit?: any
    type?: "button" | "submit" | "reset"
}


const ButtonCustom: React.FC<ButtonCustomPropsType> = ({onClick, disabled, type,
                                                           sizeButton, ...restProps}) => {

    return (
        <Button onSubmit={restProps.onSubmit} type={type ? type : 'button'} className={s.buttonStyle} size={sizeButton ? sizeButton : 'medium'}
                disabled={disabled}
                variant={'contained'} onClick={onClick}>
            {restProps.children}
        </Button>
    );
};

export default ButtonCustom;