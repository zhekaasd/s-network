import React from 'react';
import {Button} from "@mui/material";

import s from "./ButtonCustom.module.scss";

type ButtonCustomPropsType = {
    onClick: () => void
    disabled?: boolean
    sizeButton?: "small" | "medium" | "large"
}


const ButtonCustom: React.FC<ButtonCustomPropsType> = ({onClick, disabled, sizeButton, ...restProps}) => {
    return (
        <Button className={s.buttonStyle} size={sizeButton ? sizeButton : 'medium'}
                disabled={disabled}
                variant={'contained'} onClick={onClick}>
            {restProps.children}
        </Button>
    );
};

export default ButtonCustom;