import React from 'react';
import {Button} from "@mui/material";

type ButtonCustomPropsType = {
    onClick: () => void
}
const ButtonCustom: React.FC<ButtonCustomPropsType> = ({onClick}) => {
    return (
        <Button color={'success'} variant={'contained'} onClick={onClick}> child </Button>
    );
};

export default ButtonCustom;