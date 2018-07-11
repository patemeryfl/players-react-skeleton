import React, { Component } from 'react';
import icons from '../../assets/svgs';

class Home extends Component {
  state = {}
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <header>
          <h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
              <path d={icons.error} />
            </svg>
          </h1>
          <h2>
            404 Page Not Found
          </h2>
        </header>
        <article>
          <h4>&nbsp;&nbsp;&nbsp;&nbsp;Sorry, this page does not exist.</h4>
        </article>
      </div>
    );
  }
}

export default Home;
