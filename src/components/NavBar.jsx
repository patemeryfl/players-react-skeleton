import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ isSignedIn, actions }) => (
  <nav>
    <div>
      <Link to="/" href="/">Home</Link>
      <Link to="/roster" href="/roster">Roster</Link>
      <Link to="/players" href="/players">Players</Link>
    </div>
    <div>
      {!isSignedIn ?
        <button><Link to="/signin" href="/signin">Sign In</Link></button> :
        <button onClick={actions.signOut}>Sign Out</button>
        }
    </div>
  </nav>
);

export default NavBar;

NavBar.propTypes = {
  isSignedIn: PropTypes.bool,
  actions: PropTypes.objectOf(PropTypes.func),
};

