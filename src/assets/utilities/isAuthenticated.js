import decode from 'jwt-decode';

/*
  Checks if current user is logged in.
  Successful log in adds jwt token to local storage.
  Method decodes token and if its a valid token, returns true.
*/

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  try {
    decode(token);
  } catch (err) {
    return false;
  }
  return true;
};

export default isAuthenticated;
