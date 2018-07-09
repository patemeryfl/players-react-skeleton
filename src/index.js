import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Redirect } from 'react-router-dom';
// Importing the fetch polyfill allows cypress to intercept fetch api requests.
import 'whatwg-fetch';
// Change me if you prefer sass,scss, less. (Note you may need to update the build config)
import './index.scss';
import Home from './containers/Home';
import Players from './containers/Players';
import Register from './containers/Register';
import Roster from './containers/Roster';
import NotFound from './containers/NotFound';

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Home} >
      <Route path="players" component={Players} />
      <Route path="register/" component={Register} />
      <Route path="roster/" component={Roster} />
      <Route path="not-found" component={NotFound} />
      <Redirect from="*" to="not-found" />
    </Route>
  </Router>
);

ReactDOM.render(<div>{Routes}</div>, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
