import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Roster from '../../src/containers/Roster';

describe('Roster Container', () => {
  it('Renders an add button', () => {
    expect(mount(<Router><Roster /></Router>).find('#addPlayer').exists()).toBe(true);
  });
});

