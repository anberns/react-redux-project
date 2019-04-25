export default function authFetch(email, password) {
  return (dispatch) => {
    dispatch({ type: 'AUTHENTICATING' });
    return fetch('http://localhost:3000/auth/login', {
      //return fetch('https://rapid-exchange-api.herokuapp.com/students/create', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(response => response.json())
      .then(user => dispatch({ type: 'AUTH_FETCH', user}));
  };
}