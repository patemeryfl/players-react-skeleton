import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import DashBoard from '../../components/DashBoard';
import { getRoster, deletePlayer } from './actions';
import icons from '../../assets/svgs';
import './roster.scss';
import Loader from '../../components/Loader';

class Roster extends Component {
  state = {
    currentPlayer: '',
    players: null,
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
      this.setState({ currentPlayer });
    },
    deletePlayer: async (id) => {
      const token = localStorage.getItem('token');
      deletePlayer.url = `${deletePlayer.url}/${id}`;
      deletePlayer.headers.Authorization = `Bearer ${token}`;
      const { data } = await axios(deletePlayer);
      if (data.success) {
        const deletedPlayer = this.state.players.find(player => player.id === id);
        const deletedPlayerIndex = this.state.players.indexOf(deletedPlayer);
        this.setState({
          currentPlayer: '',
          players: [
            ...this.state.players.slice(0, deletedPlayerIndex),
            ...this.state.players.slice(deletedPlayerIndex + 1),
          ],
          message: 'Player deleted successfully',
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
              <button key={player.id} onClick={() => this.actions.getPlayerInfo(player.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                  <path d={icons.arrow} />
                </svg>&nbsp;
                {player.first_name} {player.last_name}
              </button>
              )) : <div />
            }
          <Link to="/player/new" href="/player/new">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                <path d={icons.add} />
              </svg>&nbsp;
              Add New Player
            </button>
          </Link>
        </div>
        <div className="stats">
          { this.state.players.length === 0 ?
            <div>
              <h3>You have no players on your team!</h3>
              <h4>Click Add Player to start playing</h4>
            </div> :
            <DashBoard player={this.state.currentPlayer} deletePlayer={this.actions.deletePlayer} />
          }
        </div>
      </div>
    );
  }
}

export default withRouter(Roster);
