import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavBar extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    actions: PropTypes.object,
    history: PropTypes.object,
  };

  componentWillMount() {
    this.props.history.listen(() => {
      this.props.actions.checkAuth();
    });
  }

  actions = {
    logIn: () => {
      this.props.history.push('/login');
    },
    logOut: () => {
      localStorage.removeItem('token');
      this.props.actions.checkAuth();
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
          {!this.props.isLoggedIn ?
            <button onClick={this.actions.logIn}>Login</button> :
            <button onClick={this.actions.logOut}>Log Out</button>
          }
        </div>
      </nav>
    );
  }
}

export default withRouter(NavBar);
