import React from 'react';
import {Box, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import styles from "./inputWithIcon.module.scss";

type InputWithIConPropsType = {
    styleInput?: "standard" | "filled" | "outlined" | undefined
}


const InputWithIcon: React.FC<InputWithIConPropsType> = ({styleInput}) => {

    const inputVariant = styleInput ? styleInput : "standard";

    return (
        <Box className={styles.wrapperInput}>
            <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField variant={inputVariant} />
        </Box>
    );
};

export default InputWithIcon;