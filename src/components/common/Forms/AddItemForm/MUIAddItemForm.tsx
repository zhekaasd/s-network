import React from 'react';

import styles from "./MUIaddItemForm.module.scss";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength} from "../../../../utils/validators";
import ButtonCustom from '../../Button/ButtonCustom';
import TextareaCustom from "../../Textarea/TextareaCustom";
import {FormControlHOC} from "../../../../hocs/FormControl/FormControlHOC";

// type MUIAddItemFormPropsType = InjectedFormProps & {
//     value: string
//     onClick: () => void
//     onChange: (value: string) => void
//     numberRows?: number
//     classNameCustom?: string
//     childrenButton?: string
// }

type MUIAddItemFormPropsType =  {
    classNameCustom?: string
    childrenButton?: string
}

const TextArea = FormControlHOC(TextareaCustom);
const maxLength10 = maxLength(100);



const MUIAddItemForm: React.FC<InjectedFormProps & MUIAddItemFormPropsType> = ({childrenButton, ...restProps}) => {

    const addItemFormFinalStyles = `${styles.addItemForm} ${restProps.classNameCustom ? restProps.classNameCustom : ''}`;

    console.log(restProps);

    return (
        <form onSubmit={restProps.handleSubmit} className={addItemFormFinalStyles}>
            <Field type={'text'} component={TextArea} name={'value'} validate={[maxLength10]} />
            <ButtonCustom type={'submit'}> {childrenButton ? childrenButton : 'Send'} </ButtonCustom>
        </form>
    );
};

export default reduxForm({
    form: 'addItemForm',
})(MUIAddItemForm);
