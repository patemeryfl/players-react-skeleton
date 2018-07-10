import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import decode from 'jwt-decode';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  try {
    decode(token);
  } catch (err) {
    return false;
  }
  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
        (isAuthenticated() ?
          (<Component {...props} />) :
          (<Redirect to={{ pathname: '/signin' }} />)
        )}
  />
);

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.func,
};

