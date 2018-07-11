import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const signOut = () => {
  localStorage.removeItem('token');
  this.props.history.push('/home');
};

const NavBar = ({ isSignedIn }) => (
  <nav>
    <div>
      <Link to="/" href="/">Home</Link>
      <Link to="/roster" href="/roster">Roster</Link>
      <Link to="/players" href="/players">Players</Link>
    </div>
    <div>
      {!isSignedIn ?
        <button><Link to="/login" href="/login">Login</Link></button> :
        <button onClick={signOut}>Sign Out</button>
        }
    </div>
  </nav>
);

export default withRouter(NavBar);

NavBar.propTypes = {
  isSignedIn: PropTypes.bool,
};

