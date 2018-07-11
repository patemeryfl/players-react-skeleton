import constants from '../../assets/constants';

const addNewPlayer = {
  method: 'get',
  url: `${constants.API_URL}/players`,
  data: '',
  headers: {
    'Content-Type': 'application/json',
    Authorization: '',
  },
};

export default addNewPlayer;
