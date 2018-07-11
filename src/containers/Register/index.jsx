import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import newRegistration from './actions';
import RegisterForm from '../../components/RegisterForm';

class Register extends Component {
  static propTypes = {
    history: PropTypes.object,
  }
  state = {
    error: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
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
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
      });
    },
    handleChange: prop => (event) => {
      this.setState({ [prop]: event.target.value });
    },
    submitRegistration: async (e) => {
      e.preventDefault();
      if (this.actions.validate) {
        newRegistration.data = this.state;
        delete newRegistration.data.error;
        const { data } = await axios(newRegistration);
        if (data.success) {
          localStorage.setItem('token', data.token);
          this.props.history.push('/roster');
        } else {
          this.setState({ error: `${data.error.message}. Please try again.` });
        }
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

export default withRouter(Register);
