import constants from '../../assets/constants';

const addNewPlayer = {
  method: 'post',
  url: `${constants.API_URL}/players`,
  data: '',
  headers: {
    'Content-Type': 'application/json',
    Authorization: '',
  },
};

export default addNewPlayer;
