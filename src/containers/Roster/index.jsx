import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import DashBoard from '../../components/DashBoard';
import getRoster from './actions';
import icons from '../../assets/svgs';
import './roster.scss';
import constants from '../../assets/constants';

class Roster extends Component {
  state = {
    currentPlayer: '',
    players: [],
  }

  componentWillMount() {
    this.actions.getRoster();
  }

  actions = {
    getRoster: async () => {
      const token = localStorage.getItem('token');
      getRoster.headers.Authorization = `Bearer ${token}`;
      const { data } = await axios(getRoster);
      if (data.success) {
        this.setState({ players: data.players });
      } else {
        this.setState({ error: `${data.error.message}. Please try again.` });
      }
    },
    getPlayerInfo: (id) => {
      const currentPlayer = this.state.players.find(player => player.id === id);
      this.setState({ currentPlayer });
    },
    deletePlayer: async (id) => {
      const url = `${constants.API_URL}/players/${id}`;
      const token = localStorage.getItem('token');
      const payload = {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { success } = await fetch(url, payload);
      if (success) {
        this.setState({ message: 'Player deleted successfully' });
      }
    },
  }

  render() {
    return (
      <div className="roster">
        <div className="current_roster">
          <h2>Roster</h2>
          {this.state.players.map(player => (
            <button key={player.id} onClick={() => this.actions.getPlayerInfo(player.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                <path d={icons.arrow} />
              </svg>&nbsp;
              {player.first_name} {player.last_name}
            </button>
              ))
            }<br /><br />
          <Link to="/player/new" href="/player/new">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                <path d={icons.add} />
              </svg>&nbsp;
              Add New Player
            </button>
          </Link>
        </div>
        <div>
          {this.state.currentPlayer === '' ?
            <h2>Please select a player to view their stats</h2> :
            <DashBoard player={this.state.currentPlayer} deletePlayer={this.actions.deletePlayer} />
          }
        </div>
      </div>
    );
  }
}

export default withRouter(Roster);
