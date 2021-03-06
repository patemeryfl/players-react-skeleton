import React from 'react';
import PropTypes from 'prop-types';
import icons from '../assets/svgs';

const RegisterForm = ({ state, actions }) => (
  <form id="registerForm">
    <div className="input-group input-group-icon">
      <label htmlFor="firstName">First Name</label>
      <input type="text" value={state.first_name} placeholder="First Name" id="firstName" onChange={actions.handleChange('first_name')} />
      <div className="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d={icons.person} />
        </svg>
      </div>
    </div>
    <div className="input-group input-group-icon">
      <label htmlFor="lastName">Last Name</label>
      <input type="text" value={state.last_name} placeholder="Last Name" id="lastName" onChange={actions.handleChange('last_name')} />
      <div className="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d={icons.person} />
        </svg>
      </div>
    </div>
    <div className="input-group input-group-icon">
      <label htmlFor="email">Email</label>
      <input type="email" value={state.email} placeholder="Email Address" id="email" onChange={actions.handleChange('email')} />
      <div className="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d={icons.email} />
        </svg>
      </div>
    </div>
    <div className="input-group input-group-icon">
      <label htmlFor="password">Password</label>
      <input type="password" value={state.password} placeholder="Password" id="password" onChange={actions.handleChange('password')} />
      <div className="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d={icons.password} />
        </svg>
      </div>
    </div>
    <div className="input-group input-group-icon">
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" value={state.confirm_password} placeholder="Confirm Password" id="confirmPassword" onChange={actions.handleChange('confirm_password')} />
      <div className="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d={icons.check} />
        </svg>
      </div>
    </div>
    {state.error ? <div className="formError">{state.error}</div> : <div /> }
    <footer>
      <button id="clear" onClick={actions.clearForm}>Clear</button>
      <button id="register" onClick={actions.submitRegistration}>Register</button>
    </footer>
  </form>
);

export default RegisterForm;

RegisterForm.propTypes = {
  state: PropTypes.shape({
    error: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }),
  actions: PropTypes.objectOf(PropTypes.func),
};
