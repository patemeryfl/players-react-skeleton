import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


const NavBar = ({ isSignedIn }) => {
  const signOut = () => {
    localStorage.removeItem('token');
    this.props.history.push('/home');
  };
  return (
    <nav>
      <div>
        <Link to="/" href="/">Home</Link>
        <Link to="/roster" href="/roster">Roster</Link>
      </div>
      <div>
        {!isSignedIn ?
          <Link to="/login" href="/login"><button>Login</button></Link> :
          <button onClick={signOut}>Log Out</button>
        }
      </div>
    </nav>
  );
};

export default withRouter(NavBar);

NavBar.propTypes = {
  isSignedIn: PropTypes.bool,
};

