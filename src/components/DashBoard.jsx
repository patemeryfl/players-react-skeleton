import React from 'react';
import PropTypes from 'prop-types';

const DashBoard = ({ player, deletePlayer }) => (
  <div className="stats">
    <h2>{player.first_name} {player.last_name}</h2>
    <h3>Stats</h3>
    <p>Rating: {player.rating}</p>
    <p>Handedness: { player.handedness }</p>
    <button onClick={() => deletePlayer(player.id)} className="delete">Delete Player</button>
  </div>
);

export default DashBoard;

DashBoard.propTypes = {
  player: PropTypes.objectOf({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    rating: PropTypes.number,
    handedness: PropTypes.string,
    id: PropTypes.string,
  }),
  deletePlayer: PropTypes.func,
};

DashBoard.defaultProps = {
  player: {
    first_name: '',
    last_name: '',
    rating: '',
    handedness: '',
    id: '',
  },
};

