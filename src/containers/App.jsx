import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
// Importing the fetch polyfill allows cypress to intercept fetch api requests.
import 'whatwg-fetch';
// Change me if you prefer sass,scss, less. (Note you may need to update the build config)
import '../assets/style.scss';
import Home from '../containers/Home';
import Player from '../containers/Player';
import Register from '../containers/Register';
import LogIn from '../containers/LogIn';
import Roster from '../containers/Roster';
import NotFound from '../containers/NotFound';

import NavBar from '../components/NavBar';
import isAuthenticated from '../assets/utilities/isAuthenticated';
import PrivateRoute from '../components/PrivateRoute';

import '../containers/Home/home.scss';
import '../containers/Roster/roster.scss';

class App extends Component {
  state = {
    loggedIn: false,
  }

  componentWillMount() {
    this.actions.checkAuth();
  }

  actions = {
    checkAuth: () => {
      if (isAuthenticated()) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    },
  }

  render() {
    return (
      <Router history={browserHistory}>
        <div>
          <NavBar isLoggedIn={this.state.loggedIn} actions={this.actions} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={LogIn} />
            <PrivateRoute path="/roster/" exact component={Roster} />
            <PrivateRoute path="/player/new" exact component={Player} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
