import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../../src/containers/Home';

describe('Home Container', () => {
  const HomeComponent = mount(<Router><Home /></Router>);

  it('Renders a register button', () => {
    expect(HomeComponent.find('#register').exists()).toBe(true);
  });
  it('Sets CSS classes', () => {
    expect(HomeComponent.find('#home').hasClass('home')).toBe(true);
    expect(HomeComponent.find('#first').hasClass('first')).toBe(true);
  });
});

