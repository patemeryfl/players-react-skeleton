import React from 'react';
import { shallow, mount } from 'enzyme';
import DashBoard from '../../src/components/DashBoard';

const Player = {
  first_name: 'First',
  last_name: 'Last',
  rating: 100,
  handedness: 'Left',
};

describe('Dashboard Component', () => {
  it('Renders to the DOM', () => {
    expect(shallow(<DashBoard />).find('#dashboard').exists()).toBe(true);
  });
  it('Mounts and reads props', () => {
    const wrapper = mount(<DashBoard player={Player} />);
    expect(wrapper.props().player).toEqual({
      first_name: 'First',
      last_name: 'Last',
      rating: 100,
      handedness: 'Left',
    });
  });
});

