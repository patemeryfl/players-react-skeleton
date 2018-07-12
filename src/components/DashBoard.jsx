import React from 'react';
import PropTypes from 'prop-types';

const DashBoard = ({ player }) => (
  <div className="statsTitle" id="dashboard">
    <h2>{player.first_name} {player.last_name}</h2>
    <h3>Stats</h3>
    <div className="statsBody">
      <div>
        <p>Rating: {player.rating}</p>
        <p>Handedness: { player.handedness }</p>
      </div>
    </div>
  </div>
);

export default DashBoard;

DashBoard.propTypes = {
  player: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
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

