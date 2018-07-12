import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from '../../src/containers/Register';
import RegisterForm from '../../src/components/RegisterForm';

const RegisterState = {
  error: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirm_password: '',
};

const RegisterActions = {
  handleChange: () => {},
};

describe('Register Container', () => {
  const RegisterContainer = mount(<Router><Register /></Router>);
  const RegisterNewUser = shallow(<RegisterForm
    state={RegisterState}
    actions={RegisterActions}
  />);

  it('Renders the registerform', () => {
    expect(RegisterContainer.find(RegisterForm).exists()).toBe(true);
  });
  it('Form shows input fields', () => {
    expect(RegisterNewUser.find('#firstName').exists()).toBe(true);
    expect(RegisterNewUser.find('#lastName').exists()).toBe(true);
    expect(RegisterNewUser.find('#email').exists()).toBe(true);
    expect(RegisterNewUser.find('#password').exists()).toBe(true);
    expect(RegisterNewUser.find('#confirmPassword').exists()).toBe(true);
  });
});

