import React from 'react';
import {TextField} from "@mui/material";

type InputCustomPropsType = {
    sizeField?: "small" | "medium"
    typeField?: "standard" | "filled" | "outlined"
    widthField?: boolean
}

const InputCustom: React.FC<InputCustomPropsType> = (props) => {
    return (
        <TextField
            variant={props.typeField ? props.typeField : 'standard'}
            size={props.sizeField ? props.sizeField : 'medium'}
            fullWidth={props.widthField}

        />
    );
};

export default InputCustom;