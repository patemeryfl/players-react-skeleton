import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

class Home extends Component {
  state = {}

  render() {
    return (
      <div className="home">
        <header>
          <h1>Welcome to Office Quidditch</h1>
          <p>Register now to get started!</p>
          <Link to="/register" href="/register"><button>Register</button></Link>
        </header>
        <section>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
          <ul>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Home;
