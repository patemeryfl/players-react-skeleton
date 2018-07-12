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
    signedIn: false,
  }

  componentWillMount() {
    if (isAuthenticated()) this.setState({ signedIn: true });
  }

  render() {
    return (
      <Router history={browserHistory}>
        <div>
          <NavBar isSignedIn={this.state.signedIn} actions={this.actions} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/player/new" exact component={Player} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={LogIn} />
            <PrivateRoute path="/roster/" exact component={Roster} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
