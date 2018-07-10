import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
// Importing the fetch polyfill allows cypress to intercept fetch api requests.
import 'whatwg-fetch';
// Change me if you prefer sass,scss, less. (Note you may need to update the build config)
import './assets/style.scss';
import Home from './containers/Home';
import Players from './containers/Players';
import Register from './containers/Register';
import Roster from './containers/Roster';
import NotFound from './containers/NotFound';

import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  state = {
    signedIn: false,
  }
  actions = {
    signIn: () => {
      // history.push('/login');
    },
    signOut: () => {
      localStorage.removeItem('token');
    },
  }
  render() {
    return (
      <Router history={browserHistory}>
        <Switch>
          <NavBar isSignedIn={this.state.signedIn} actions={this.actions} />
          <Route path="/" exact component={Home} />
          <Route path="/players" exact component={Players} />
          <Route path="/register/" exact component={Register} />
          <PrivateRoute path="/roster/" exact component={Roster} />
          <Route path="/not-found" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
