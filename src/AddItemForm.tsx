import s from './AddItemForm.module.scss';
import React, {ChangeEvent} from "react";

type AIFPropsType = {
    onClick: () => void
    onChange: (value: string) => void
    value: string
}
export const AddItemForm: React.FC<AIFPropsType> = ({onClick, onChange, value, ...restProps}) => {

    const onClickHandler = () => {
        onClick();
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.currentTarget.value);
    }

    return <div className={s.wrapper}>
        <textarea onChange={onChangeHandler} value={value}
        />

        <button onClick={onClickHandler} >send</button>
    </div>
}