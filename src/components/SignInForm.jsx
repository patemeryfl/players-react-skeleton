import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import icons from '../assets/svgs';

const SignInForm = ({ state, actions }) => (
  <form>
    <div className="input-group input-group-icon">
      <input type="email" value={state.email} placeholder="Email Address" id="email" onChange={actions.handleChange('email')} />
      <div className="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d={icons.email} />
        </svg>
      </div>
    </div>
    <div className="input-group input-group-icon">
      <input type="password" value={state.password} placeholder="Password" id="password" onChange={actions.handleChange('password')} />
      <div className="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d={icons.password} />
        </svg>
      </div>
    </div>
    {state.error ? <div>{state.error}</div> : <div /> }
    <footer>
      <button><Link to="/register" href="/register">Register</Link></button>
      <button onClick={actions.signIn}>Sign In</button>
    </footer>
  </form>
);

export default SignInForm;

SignInForm.propTypes = {
  state: PropTypes.shape({
    error: '',
    email: '',
    password: '',
  }),
  actions: PropTypes.objectOf(PropTypes.func),
};
