import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './assets/utilities/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
