import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    //method to handle nextStep
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        //destructure values so that we can use it as variables
        const { values, handleChange } = this.props;
        return (
            //material ui wrapper
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField
                        hintTest="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                        hintTest="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br />
                    <TextField
                        hintTest="Enter Your Email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br />
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails;
