import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import LogInForm from '../../components/LogInForm';
import login from './actions';

class LogIn extends Component {
  static propTypes = {
    history: PropTypes.object,
  }
  state = {
    error: '',
    email: '',
    password: '',
  }
  actions = {
    validate: () => {
      if (this.state.email === '' || this.state.password === '') {
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
    logIn: async (e) => {
      e.preventDefault();
      if (this.actions.validate()) {
        login.data = this.state;
        delete login.error;
        const { data } = await axios(login).catch(err =>
          this.setState({ error: `${err.response.data.error.message}. Please try again` }));
        if (data.success) {
          localStorage.setItem('token', data.token);
          this.props.history.push('/roster');
        }
      }
    },
  }
  render() {
    return (
      <div>
        <h2>Log In</h2>
        <LogInForm state={this.state} actions={this.actions} />
      </div>
    );
  }
}

export default withRouter(LogIn);
