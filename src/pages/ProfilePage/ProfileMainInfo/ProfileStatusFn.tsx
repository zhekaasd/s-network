import React, {useEffect, useState} from "react";
import InputCustom from "../../../components/accets/components/input/InputCustom";
import {TextField} from "@mui/material";

type ProfileStatusI = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatus: React.FC<ProfileStatusI> = (props) => {



    const [status, setStatus] = useState<string>(props.status);
    const [activeMode, setActiveMode] = useState<boolean>(false);


/*    componentDidUpdate(prevProps: Readonly<ProfileStatusI>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }*/


    useEffect(() => {
        setStatus(props.status);
    }, [props.status])



    const activatedMode = () => {
        setActiveMode(true)
    }

    const deactivatedMode = () => {
        setActiveMode(false)
        props.updateStatus(status);
    }

        return (
            <>
                {!activeMode && <p onDoubleClick={activatedMode}>{status ? status : 'Status text..'}</p> }

                {
                    activeMode && <InputCustom onChangeText={setStatus} value={status} autoFocus onBlur={deactivatedMode} />

                }
{/*                {
                    activeMode && <input autoFocus onChange={(e) => onChangeHandler(e.currentTarget.value)} type="text" value={status} onBlur={deactivatedMode}/>
                }*/}
            </>
        );
};


export default ProfileStatus;