import React from 'react';
import {TextField} from "@mui/material";

import styles from "./textareaCustom.module.scss";

type TextareaCustomPropsType = {
    value: string
    onChange: (value: string) => void
    numberRows?: number
}
const TextareaCustom: React.FC<TextareaCustomPropsType> = ({value, onChange, numberRows}) => {

/*--- size of textarea field ---*/
    const rows = numberRows ? numberRows : 1;

    return (
        <TextField multiline rows={rows}
                   className={styles.textarea}
                   value={value}
                   placeholder={'What is new, John Doe?'}
                   onChange={(e) => onChange(e.currentTarget.value)} />
    );
};

export default TextareaCustom;