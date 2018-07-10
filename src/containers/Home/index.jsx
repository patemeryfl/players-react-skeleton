import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

class Home extends Component {
  state = {}

  render() {
    return (
      <div className="home">
        <header>
          <h1>Welcome to Office Game</h1>
          <p>Where all things happen</p>
          <button><Link to="/register" href="/register">Get Started</Link></button>
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
