import React from 'react';
import TextareaCustom from "../../accets/components/textarea/TextareaCustom";
import ButtonCustom from "../../accets/components/buton/ButtonCustom";

import styles from "./MUIaddItemForm.module.scss";

type MUIAddItemFormPropsType = {
    value: string
    onClick: () => void
    onChange: (value: string) => void
    numberRows?: number
    classNameCustom?: string
    childrenButton?: string
}
const MUIAddItemForm: React.FC<MUIAddItemFormPropsType> = ({value, onClick, onChange, childrenButton,
                                                         numberRows, ...restProps}) => {



    const addItemFormFinal = `${styles.addItemForm} ${restProps.classNameCustom ? restProps.classNameCustom : ''}`

    return (
        <div className={addItemFormFinal}>
            <TextareaCustom numberRows={numberRows} onChange={onChange} value={value}  />
            <ButtonCustom onClick={onClick}> {childrenButton ? childrenButton : 'Send'} </ButtonCustom>
        </div>
    );
};

export default MUIAddItemForm;