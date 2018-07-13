import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import DashBoard from '../../components/DashBoard';
import { getRoster, deletePlayer } from './actions';
import icons from '../../assets/svgs';
import Loader from '../../components/Loader';
import constants from '../../assets/constants';

class Roster extends Component {
  state = {
    error: '',
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
        if (data.players) this.setState({ currentPlayer: data.players[0] });
      } else {
        this.setState({ error: `${data.error.message}. Please try again.` });
      }
    },
    getPlayerInfo: (id) => {
      const currentPlayer = this.state.players.find(player => player.id === id);
      this.setState({ currentPlayer, error: '' });
    },
    deletePlayer: async (id) => {
      const token = localStorage.getItem('token');
      deletePlayer.url = `${constants.API_URL}/players/${id}`;
      deletePlayer.headers.Authorization = `Bearer ${token}`;
      const { data } = await axios(deletePlayer).catch(() =>
        this.setState({ error: 'An error occured when trying to delete this player.' }));
      if (data.success) {
        const deletedPlayer = this.state.players.find(player => player.id === id);
        const deletedPlayerIndex = this.state.players.indexOf(deletedPlayer);
        this.setState({
          currentPlayer: '',
          players: [
            ...this.state.players.slice(0, deletedPlayerIndex),
            ...this.state.players.slice(deletedPlayerIndex + 1),
          ],
        });
      }
    },
  }

  render() {
    if (this.state.players === null) { return (<Loader />); }
    return (
      <div className="roster">
        <div className="current_roster">
          <h2>Roster</h2>
          {this.state.players.length > 0 ?
            this.state.players.map(player => (
              <button className="rosterButton" key={player.id} onClick={() => this.actions.getPlayerInfo(player.id)}>
                <p>{player.first_name} {player.last_name}</p>
                <svg className="delete" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" onClick={() => this.actions.deletePlayer(player.id)}>
                  <path d={icons.delete} />
                </svg>
              </button>
              )) : <div />
            }
          <Link to="/player/new" href="/player/new">
            <button id="addPlayer">
              <p>Add New Player</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                <path d={icons.add} />
              </svg>
            </button>
          </Link>
        </div>
        <div>
          { this.state.players.length === 0 ?
            <div className="stats_start">
              <h3>You have no players on your team!</h3>
              <h4>Click Add New Player to start playing</h4>
            </div> :
            <DashBoard player={this.state.currentPlayer} deletePlayer={this.actions.deletePlayer} />
          }
          {this.state.error ? <div className="formError">{this.state.error}</div> : <div /> }
        </div>
      </div>
    );
  }
}

export default withRouter(Roster);
