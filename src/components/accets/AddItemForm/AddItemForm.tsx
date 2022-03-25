import React from 'react';
import TextareaCustom from "../textarea/TextareaCustom";
import ButtonCustom from "../buton/ButtonCustom";

import styles from "./addItemForm.module.scss";

type AddItemFormPropsType = {
    value: string
    onClick: () => void
    onChange: (value: string) => void
    numberRows?: number
}
const AddItemForm: React.FC<AddItemFormPropsType> = ({value, onClick, onChange,
                                                         numberRows, ...restProps}) => {
    return (
        <div className={styles.addItemForm}>
            <TextareaCustom numberRows={numberRows} onChange={onChange} value={value}  />
            <ButtonCustom onClick={onClick} />
        </div>
    );
};

export default AddItemForm;