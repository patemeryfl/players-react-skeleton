import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignInForm from '../../components/SignInForm';

class SignIn extends Component {
  static propTypes = {
    signIn: PropTypes.func,
  }
  state = {
    error: '',
    email: '',
    password: '',
  }
  actions = {
    validate: () => {
      if (this.state.email || this.state.password === '') {
        this.setState({ error: 'Email & Password are required' });
        return false;
      }
      return true;
    },
    clearForm: (e) => {
      e.preventDefault();
      this.setState(this.state);
    },
    handleChange: prop => (event) => {
      this.setState({ [prop]: event.target.value });
    },
    signIn: (e) => {
      e.preventDefault();
      if (this.actions.validate) {
        this.props.signIn();
      }
    },
  }
  render() {
    return (
      <div>
        <h2>Sign In</h2>
        <SignInForm state={this.state} actions={this.actions} />
      </div>
    );
  }
}

export default SignIn;
