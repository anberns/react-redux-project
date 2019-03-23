export default function fetchUser(id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USER' });
    return fetch(`http://localhost:3000/users/${id}`)
    //return fetch('https://rapid-exchange-api.herokuapp.com/students')
      .then(response => response.json())
      .then(user => dispatch({ type: 'FETCH_USER', user}));
  };
}