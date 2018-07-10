import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ isSignedIn, signIn, signOut }) => (
  <nav>
    <div>
      <Link to="/" href="/">Home</Link>
      <Link to="/roster" href="/roster">Roster</Link>
      <Link to="/players" href="/players">Players</Link>
    </div>
    <div>
      {!isSignedIn ?
        <button onClick={signIn}>Sign In</button> :
        <button onClick={signOut}>Sign Out</button>
        }
    </div>
  </nav>
);

export default NavBar;

NavBar.propTypes = {
  isSignedIn: PropTypes.bool,
  signIn: PropTypes.func,
  signOut: PropTypes.func,
};

