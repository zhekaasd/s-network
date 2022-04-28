import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import {TextField} from "@mui/material";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputCustomPropsType =  Omit<DefaultInputPropsType, 'type'> & {
    sizeField?: "small" | "medium"
    typeField?: "standard" | "filled" | "outlined"
    widthField?: boolean
    onChangeText?: (value: string) => void
}

const InputCustom: React.FC<InputCustomPropsType> = ({typeField, sizeField, widthField,
                                                         onChange, onChangeText, ...restProps}) => {

/*    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)

        onChangeText && onChangeText(e.currentTarget.value)
    }*/


    return (
        <TextField
            variant={typeField ? typeField : 'standard'}
            size={sizeField ? sizeField : 'medium'}
            fullWidth={widthField}
            onBlur={restProps.onBlur}
            autoFocus={restProps.autoFocus && restProps.autoFocus}
            value={restProps.value}
            onChange={(e) => onChangeText && onChangeText(e.currentTarget.value)}
        />
    );
};

export default InputCustom;