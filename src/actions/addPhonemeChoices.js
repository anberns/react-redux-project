export default function addPhonemeChoices(chosen) {
  return (dispatch) => {
    dispatch({ type: 'ADD_PHONEME_CHOICES', chosen });
  };
}