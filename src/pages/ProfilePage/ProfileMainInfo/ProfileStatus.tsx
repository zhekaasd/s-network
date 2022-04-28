import React from "react";
import InputCustom from "../../../components/accets/components/input/InputCustom";

interface ProfileStatusI {
    status: string
    updateStatus: (status: string) => void
}
class ProfileStatus extends React.Component<ProfileStatusI, {}> {

    state = {
        activeMode: false,
        status: this.props.status
    }


    componentDidUpdate(prevProps: Readonly<ProfileStatusI>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    onChangeHandler = (value: string) => {
        this.setState({
            status: value
        })
    }

    activatedMode() {
        this.setState({
            activeMode: true
        })
    }

    deactivatedMode() {
        this.setState({
            activeMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    render() {
        return (
            <>
                {!this.state.activeMode && <p onDoubleClick={this.activatedMode.bind(this)}>{this.props.status ? this.props.status : 'Status text..'}</p> }

{/*                {
                    this.state.activeMode && <InputCustom onChangeText={this.setState} value={this.props.status} autoFocus onBlur={this.deactivatedMode.bind(this)} />

                }*/}
                {
                    this.state.activeMode && <input autoFocus onChange={(e) => this.onChangeHandler(e.currentTarget.value)} type="text" value={this.state.status} onBlur={this.deactivatedMode.bind(this)}/>
                }
            </>
        );
    }
};


export default ProfileStatus;