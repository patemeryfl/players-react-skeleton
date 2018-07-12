import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import icons from '../assets/svgs';

const LogInForm = ({ state, actions }) => (
  <form id="loginForm">
    <div className="input-group input-group-icon">
      <label htmlFor="email">Email
        <input type="email" value={state.email} placeholder="Email" id="email" onChange={actions.handleChange('email')} />
      </label>
      <div className="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d={icons.email} />
        </svg>
      </div>
    </div>
    <div className="input-group input-group-icon">
      <label htmlFor="password">Password
        <input type="password" value={state.password} placeholder="Password" id="password" onChange={actions.handleChange('password')} />
      </label>
      <div className="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d={icons.password} />
        </svg>
      </div>
    </div>
    {state.error ? <div className="formError">{state.error}</div> : <div /> }
    <footer>
      <button><Link to="/register" href="/register">Register</Link></button>
      <button id="login" onClick={actions.logIn}>Log In</button>
    </footer>
  </form>
);

export default LogInForm;

LogInForm.propTypes = {
  state: PropTypes.shape({
    error: '',
    email: '',
    password: '',
  }),
  actions: PropTypes.objectOf(PropTypes.func),
};
