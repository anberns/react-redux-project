export default function fetchPhonemes() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PHONEMES' });
    //return fetch('http://localhost:3000/phonemes')
    return fetch('https://rapid-exchange-api.herokuapp.com/students')
      .then(response => response.json())
      .then(phonemes=> dispatch({ type: 'FETCH_PHONEMES', phonemes}));
  };
}