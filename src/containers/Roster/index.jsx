import React, { Component } from 'react';
import DashBoard from '../../components/DashBoard';

import './roster.scss';

class Roster extends Component {
  state = {
    currentPlayer: {},
    players: [{ index: 1, name: 'Pat' }],
  }
  render() {
    return (
      <div className="roster">
        <div className="current_roster">
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
