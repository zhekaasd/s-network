import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import {TextField} from "@mui/material";

import styles from "./TextareaCustom.module.scss";
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

type TextareaCustomPropsType = Omit<DefaultInputPropsType, 'type'> & {
    value?: string
    onChangeText?: (value: string) => void
    numberRows?: number
    type?: string
    meta?: WrappedFieldMetaProps
    input?: WrappedFieldInputProps
}
const TextareaCustom: React.FC<TextareaCustomPropsType> = ({value, onChange, numberRows = 3, onChangeText,
                                                               ...restProps}) => {

    const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)


        onChangeText && onChangeText(e.currentTarget.value)
    }


    console.log(restProps);

/*--- size of Textarea field ---*/
    const rows = numberRows ? numberRows : 1;


    return (
        <>
            <TextField multiline rows={rows}
                       className={styles.textarea}
                       value={value}
                       placeholder={'What is new, John Doe?'}
                       onChange={onChangeCallback} />

            {
                // @ts-ignore
                restProps.touched && restProps.error && <p style={{color: "red"}}>{restProps.error}</p>
            }

        </>
    );
};

export default TextareaCustom;