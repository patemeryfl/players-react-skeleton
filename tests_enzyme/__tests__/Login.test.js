import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../../src/components/LogInForm';

const LoginState = {
  email: '',
  password: '',
};

const LoginActions = {
  handleChange: () => {},
};

describe('Login Component', () => {
  const LogInFormComponent = shallow(<LoginForm state={LoginState} actions={LoginActions} />);
  it('Renders successfully', () => {
    expect(LogInFormComponent.find('#login').exists()).toBe(true);
  });

  it('Renders the email input', () => {
    expect(LogInFormComponent.find('#email').length).toEqual(1);
  });

  it('Renders the password input', () => {
    expect(LogInFormComponent.find('#password').length).toEqual(1);
  });
});
