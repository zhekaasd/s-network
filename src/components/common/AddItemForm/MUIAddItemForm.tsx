import React from 'react';
import TextareaCustom from "../../accets/textarea/TextareaCustom";
import ButtonCustom from "../../accets/buton/ButtonCustom";

import styles from "./MUIaddItemForm.module.scss";

type MUIAddItemFormPropsType = {
    value: string
    onClick: () => void
    onChange: (value: string) => void
    numberRows?: number
}
const MUIAddItemForm: React.FC<MUIAddItemFormPropsType> = ({value, onClick, onChange,
                                                         numberRows, ...restProps}) => {
    return (
        <div className={styles.addItemForm}>
            <TextareaCustom numberRows={numberRows} onChange={onChange} value={value}  />
            <ButtonCustom onClick={onClick} />
        </div>
    );
};

export default MUIAddItemForm;