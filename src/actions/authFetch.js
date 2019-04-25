export default function authFetch(email, password) {
  return (dispatch) => {
    dispatch({ type: 'AUTHENTICATING' });
    return fetch()//`http://localhost:3000/users/${id}`)
    //return fetch('https://rapid-exchange-api.herokuapp.com/students')
      .then(response => response.json())
      .then(user => dispatch({ type: 'AUTH_FETCH', user}));
  };
}