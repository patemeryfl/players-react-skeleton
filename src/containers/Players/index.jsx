import React, { Component } from 'react';

class Players extends Component {
  state = {
    players: [{ index: 1, name: 'Pat' }],
  }
  render() {
    return (
      <div>
        Current Players
        <ul>
          {this.state.players.map(player => <li key={player.index}>{player.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default Players;
