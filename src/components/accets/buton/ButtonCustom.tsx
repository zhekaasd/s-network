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
        <Button size={sizeButton ? sizeButton : 'medium'} disabled={disabled} color={'success'} variant={'contained'} onClick={onClick}> {restProps.children ? restProps.children : 'child' } </Button>
    );
};

export default ButtonCustom;