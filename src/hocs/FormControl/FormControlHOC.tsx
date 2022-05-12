import React, {ComponentType} from "react";

export const FormControlHOC = (Component: any) => {
    function WrapperComponent(props: any) {
        let {input, meta, ...restProps} = props;
        return <Component {...input} {...meta} {...restProps} />
    }

    return WrapperComponent;
}