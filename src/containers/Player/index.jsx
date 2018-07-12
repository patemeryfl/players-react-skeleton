import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import AddNewPlayerForm from '../../components/AddNewPlayer';
import addNewPlayer from './actions';

class Player extends Component {
  static propTypes = {
    history: PropTypes.object,
  }

  state = {
    error: '',
    first_name: '',
    last_name: '',
    rating: '',
    handedness: '',
  }
  actions = {
    clearForm: (e) => {
      e.preventDefault();
      this.setState({
        error: '',
        first_name: '',
        last_name: '',
        rating: '',
        handedness: '',
      });
    },
    handleChange: prop => (event) => {
      this.setState({ [prop]: event.target.value });
    },
    validate: () => {
      if (this.state.first_name === this.state.last_name) {
        this.setState({ error: 'New players must have unique first & last names' });
        return false;
      }
      if (this.state.first_name === '' ||
          this.state.last_name === '' ||
          this.state.rating === '' ||
          this.state.handedness === '') {
        this.setState({ error: 'Please fill out all fields' });
        return false;
      }
      return true;
    },
    addNewPlayer: async (e) => {
      e.preventDefault();
      if (this.actions.validate()) {
        const userToken = localStorage.getItem('token');
        addNewPlayer.data = this.state;
        addNewPlayer.headers.Authorization = `Bearer ${userToken}`;
        delete addNewPlayer.data.error;
        const { data } = await axios(addNewPlayer).catch(err =>
          this.setState({ error: `${err.response.data.error.message}. Please try again` }));
        if (data.success) {
          this.props.history.push('/roster');
        }
      }
    },
  }

  render() {
    return (
      <div>
        <h2>Add New Player</h2>
        <AddNewPlayerForm state={this.state} actions={this.actions} />
      </div>
    );
  }
}

export default withRouter(Player);
