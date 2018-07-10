import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../../components/RegisterForm';

class Register extends Component {
  static propTypes = {
    registerUser: PropTypes.func,
  }
  state = {
    error: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
  actions = {
    validate: () => {
      this.actions.checkPassword();
      return true;
    },
    checkPassword: () => {
      if (this.state.password !== this.state.confirmPassword) {
        this.setState({ error: 'Passwords do not match.' });
      }
    },
    clearForm: (e) => {
      e.preventDefault();
      this.setState({
        error: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    },
    handleChange: prop => (event) => {
      this.setState({ [prop]: event.target.value });
    },
    submitRegistration: (e) => {
      e.preventDefault();
      if (this.actions.validate) {
        this.props.registerUser();
      }
    },
  }
  render() {
    return (
      <div>
        <h2>Register</h2>
        <RegisterForm state={this.state} actions={this.actions} />
      </div>
    );
  }
}

export default Register;
