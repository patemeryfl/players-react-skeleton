import constants from '../../assets/constants';

const newRegistration = {
  method: 'post',
  url: `${constants.API_URL}/user`,
  data: '',
  headers: {
    'Content-Type': 'application/json',
  },
};

export default newRegistration;

