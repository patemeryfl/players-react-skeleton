import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Player from '../../src/containers/Player';
import AddNewPlayerForm from '../../src/components/AddNewPlayer';

const AddNewPlayerState = {
  error: '',
  first_name: '',
  last_name: '',
  rating: '',
  handedness: '',
};

const AddNewPlayerActions = {
  handleChange: () => {},
};

describe('Player Container', () => {
  const PlayerComponent = mount(<Router><Player /></Router>);
  const AddNewPlayer = shallow(<AddNewPlayerForm
    state={AddNewPlayerState}
    actions={AddNewPlayerActions}
  />);

  it('Renders the add player form', () => {
    expect(PlayerComponent.find(AddNewPlayerForm).exists()).toBe(true);
  });
  it('Form shows input fields', () => {
    expect(AddNewPlayer.find('#firstName').exists()).toBe(true);
    expect(AddNewPlayer.find('#lastName').exists()).toBe(true);
    expect(AddNewPlayer.find('#rating').exists()).toBe(true);
    expect(AddNewPlayer.find('#handedness').exists()).toBe(true);
  });
});

