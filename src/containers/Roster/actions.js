import constants from '../../assets/constants';

const getRoster = {
  method: 'get',
  url: `${constants.API_URL}/players`,
  headers: {
    Authorization: '',
  },
};

export default getRoster;

