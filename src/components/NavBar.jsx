import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


class NavBar extends Component {
  static propTypes = {
    isSignedIn: PropTypes.bool,
    history: PropTypes.object,
  };

  actions = {
    signOut: () => {
      localStorage.removeItem('token');
      this.props.history.push('/');
    },
  }
  render() {
    return (
      <nav>
        <div>
          <Link to="/" href="/">Home</Link>
          <Link to="/roster" href="/roster">Roster</Link>
        </div>
        <div>
          {!this.props.isSignedIn ?
            <Link to="/login" href="/login"><button>Login</button></Link> :
            <button onClick={this.actions.signOut}>Log Out</button>
          }
        </div>
      </nav>
    );
  }
}

export default withRouter(NavBar);
