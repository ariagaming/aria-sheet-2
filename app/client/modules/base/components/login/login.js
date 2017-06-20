
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import firebase from 'firebase';

// inith auth
const auth = firebase.auth();

/**
 * This is the basic description of the Login component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Login extends Component {
    render() {

        const changeEmail = (event) => {
            this.setState({ ...this.state, email: event.target.value });
        }

        const changePassword = (event) => {
            this.setState({ ...this.state, password: event.target.value });
        }

        const submit = () => {
            const { email, password } = this.state;
            auth.signInWithEmailAndPassword(email, password);
        }

        const createAccount = () => {
            const { email, password } = this.state;
            auth.createUserWithEmailAndPassword(email, password);
        }

        return (
            <div className="login-page">
                <div className="login-page__form">

                    <TextField
                        hintText="Email Field"
                        floatingLabelText="Email"
                        onChange={changeEmail}
                    />

                    <TextField
                        hintText="Password Field"
                        floatingLabelText="Password"
                        type="password"
                        onChange={changePassword}
                    />

                    <div className="login-page__form__buttons">
                        <RaisedButton label="Submit" onClick={submit} />
                        <RaisedButton label="Create Account" onClick={createAccount} />
                    </div>
                </div>
            </div>
        );
    }
}


Login.propTypes = {
    /**
     * Every component should at least have a name.
     */
    name: PropTypes.string
}

Login.defaultProps = {
    name: 'component-login'
}

export default Login;

