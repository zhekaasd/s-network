import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import {TextField} from "@mui/material";
import {WrappedFieldInputProps, WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type InputCustomPropsType = Omit<DefaultInputPropsType, 'type'> & {
    sizeField?: "small" | "medium"
    typeField?: "standard" | "filled" | "outlined"
    widthField?: boolean
    onChangeText?: (value: string) => void
    value?: string
    type?: string
    meta?: WrappedFieldMetaProps
    input?: WrappedFieldInputProps
}

const InputCustom: React.FC<InputCustomPropsType> = React.memo(({typeField, sizeField, widthField,
                                                                    onChange, onChangeText, value, input,
                                                                    type, ...restProps}) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)


        onChangeText && onChangeText(e.currentTarget.value)
    }

    return (
        <TextField
            type={type && type}
            variant={typeField ? typeField : 'standard'}
            size={sizeField ? sizeField : 'medium'}
            fullWidth={widthField}
            onBlur={restProps.onBlur}
            autoFocus={restProps.autoFocus ? restProps.autoFocus : false}
            value={value}
            onChange={onChangeCallback}
        />
    );
});

export default InputCustom;