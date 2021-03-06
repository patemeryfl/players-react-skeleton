import React from 'react';
import PropTypes from 'prop-types';
import icons from '../assets/svgs';

const AddNewPlayerForm = ({ state, actions }) => (
  <form id="addNewPlayer">
    <div className="input-group input-group-icon">
      <label htmlFor="firstName">First Name</label>
      <input type="text" value={state.first_name} placeholder="First Name" id="firstName" onChange={actions.handleChange('first_name')} />
      <div className="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d={icons.person} />
        </svg>
      </div>
    </div>
    <div className="input-group input-group-icon">
      <label htmlFor="lastName">Last Name</label>
      <input type="text" value={state.last_name} placeholder="Last Name" id="lastName" onChange={actions.handleChange('last_name')} />
      <div className="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d={icons.person} />
        </svg>
      </div>
    </div>
    <div className="input-group input-group-icon">
      <label htmlFor="rating">Rating</label>
      <input type="number" value={state.rating} placeholder="Rating" id="rating" onChange={actions.handleChange('rating')} />
      <div className="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d={icons.rating} />
        </svg>
      </div>
    </div>
    <div className="input-group input-group-icon">
      <label htmlFor="handedness">Handedness</label>
      <select id="handedness" value={state.handedness} onChange={actions.handleChange('handedness')}>
        <option value="" disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Handedness</option>
        <option value="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Right</option>
        <option value="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Left</option>
      </select>
      <div className="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d={icons.skill} />
        </svg>
      </div>
    </div>
    {state.error ? <div className="formError">{state.error}</div> : <div /> }
    <footer>
      <button id="clear" onClick={actions.clearForm}>Clear</button>
      <button id="create" onClick={actions.addNewPlayer}>Create</button>
    </footer>
  </form>
);

export default AddNewPlayerForm;

AddNewPlayerForm.propTypes = {
  state: PropTypes.shape({
    error: '',
    first_name: '',
    last_name: '',
    rating: '',
    handedness: '',
  }),
  actions: PropTypes.objectOf(PropTypes.func),
};
