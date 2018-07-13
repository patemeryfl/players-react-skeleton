import React from 'react';
import PropTypes from 'prop-types';
import icons from '../assets/svgs';

const DashBoard = ({ player }) => (
  <div className="stats_dashboard" id="dashboard">
    <h3>Dashboard</h3>
    <div className="stats_title">
      <h2>{player.first_name} {player.last_name}</h2>
    </div>
    <div className="stats_body">
      <div className="stats_card">
        <div className="stats_card--icon" >
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
            <path d={icons.rating} />
          </svg>
        </div>
        <div className="stats_card--body">
          <h3>RATING</h3>
          <p>{player.rating}</p>
        </div>
      </div>
      <div className="stats_card">
        <div className="stats_card--icon" >
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
            <path d={icons.skill} />
          </svg>
        </div>
        <div className="stats_card--body">
          <h3>HANDEDNESS</h3>
          <p>{ player.handedness }</p>
        </div>
      </div>
      <div className="stats_card">
        <div className="stats_card--icon" >
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
            <path d={icons.location} />
          </svg>
        </div>
        <div className="stats_card--body">
          <h3>LOCATION</h3>
          <p>Boston, MA</p>
        </div>
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

