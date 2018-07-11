import constants from '../../assets/constants';

const login = {
  method: 'post',
  url: `${constants.API_URL}/login`,
  data: '',
  headers: {
    'Content-Type': 'application/json',
  },
};

export default login;
