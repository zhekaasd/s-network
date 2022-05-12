import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import {Checkbox} from "@mui/material";


// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
    color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning"
    text?: string
    checked?: boolean
}

const CheckboxCustom: React.FC<SuperCheckboxPropsType> = ({onChange, onChangeChecked,
                                                              spanClassName, children,
                                                              checked, ...restProps}) => {


    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeChecked && onChangeChecked(e.currentTarget.checked);
    }

    return <>
        <Checkbox onChange={onChangeCallback}
                  disabled={restProps.disabled}
                  checked={checked}
        /> {children}
    </>
};

export default CheckboxCustom;