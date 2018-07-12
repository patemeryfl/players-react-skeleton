import constants from '../../assets/constants';

const getRoster = {
  method: 'get',
  url: `${constants.API_URL}/players`,
  headers: {
    Authorization: '',
  },
};

const deletePlayer = {
  method: 'DELETE',
  url: `${constants.API_URL}/players`,
  headers: {
    Authorization: '',
  },
};

export { getRoster, deletePlayer };

