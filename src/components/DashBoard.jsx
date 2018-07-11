import React from 'react';
import PropTypes from 'prop-types';

const DashBoard = ({ player }) => (
  <div>
    <header>
      <h2>First{player.first_name} Last{player.last_name}</h2>
    </header>
    <section>
      <h3>Stats</h3>
      <p>Rating: {player.rating}</p>
      <p>Handedness: { player.handedness }</p>
    </section>
  </div>
);

export default DashBoard;

DashBoard.propTypes = {
  player: PropTypes.objectOf({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    rating: PropTypes.number,
    handedness: PropTypes.string,
  }),
};
