import React from 'react';
import {Button} from "@mui/material";

import s from "./ButtonCustom.module.scss";
import {connect} from "react-redux";
import {AppStateType} from "../../../../reducers/store";

type ButtonCustomPropsType = {
    onClick?: () => void
    disabled?: boolean
    sizeButton?: "small" | "medium" | "large"
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