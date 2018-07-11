import React, { Component } from 'react';
import axios from 'axios';
import DashBoard from '../../components/DashBoard';
import getRoster from './actions';

import './roster.scss';

class Roster extends Component {
  state = {
    currentPlayer: {},
    players: [{ index: 1, name: 'Pat' }],
  }

  componentWillMount() {
    this.actions.getRoster();
  }

  actions = {
    getRoster: async () => {
      getRoster.headers.Authorization.token = localStorage.getItem('token');
      const { success, players } = await axios(getRoster);
      if (success) {
        this.setState({ players });
      } else {
        this.setState({ error: 'An error occured while getting the roster. Please try again.' });
      }
    },
  }

  render() {
    return (
      <div className="roster">
        <div className="current_roster">
          <h2>Roster</h2>
          <ul>
            {this.state.players.map(player => <li key={player.index}>{player.name}</li>)}
          </ul>
        </div>
        <div>
          {this.state.currentPlayer ?
            <DashBoard player={this.state.currentPlayer} /> :
            <p>Please select a player to view their stats</p>
          }
        </div>
      </div>
    );
  }
}

export default Roster;
