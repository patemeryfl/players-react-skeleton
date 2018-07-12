import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icons from '../../assets/svgs';
import './home.scss';

class Home extends Component {
  state = {}

  render() {
    return (
      <div id="home" className="home">
        <header>
          <h1>
            Welcome to Office Football&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
              <path d={icons.football} />
            </svg>
          </h1>
          <p>Register now to get started!</p>
          <Link to="/register" href="/register"><button id="register">Register</button></Link>
        </header>
        <section>
          <div id="first" className="first" />
          <div id="second" className="second">
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
          <div id="second" className="second">
            <div id="card" className="card">
              <h5>Gameplay</h5>
              <p>3 Game Modes</p>
              <ul>
                <li>Single Player</li>
                <li>Team Play</li>
                <li>Online Multiplayer</li>
              </ul>
            </div>
            <div id="card" className="card">
              <h5>Dashboard</h5>
              <p>Interactive dashboard shows current roster and player stats.</p>
            </div>
            <div id="card" className="card">
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
