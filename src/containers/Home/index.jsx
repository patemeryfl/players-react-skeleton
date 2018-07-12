import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

class Home extends Component {
  state = {}

  render() {
    return (
      <div className="home">
        <header>
          <h1>Welcome to Office Football</h1>
          <p>Register now to get started!</p>
          <Link to="/register" href="/register"><button>Register</button></Link>
        </header>
        <section>
          <div className="first" />
          <div className="second">
            <div>
              <h3>
                The game you never thought you needed.
              </h3>
            </div>
            <div>
              <br />
              <b>Office Football lets you play with your
                coworkers all over the world in one highly
                addictive game.
              </b>
            </div>
            <br /><br /><br /><br /><br /><br />
          </div>
          <div className="second">
            <div className="card">
              <h5>Gameplay</h5>
              <p>3 Game Modes</p>
              <ul>
                <li>Single Player</li>
                <li>Team Play</li>
                <li>Online Multiplayer</li>
              </ul>
            </div>
            <div className="card">
              <h5>Dashboard</h5>
              <p>Interactive dashboard shows current roster and player stats.</p>
            </div>
            <div className="card">
              <h5>Story Progression</h5>
              <p>Follow Along With Your Friends</p>
            </div>
            <br /><br /><br /><br /><br />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
