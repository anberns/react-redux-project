export default function loadPhonemeChoices(chosen) {
  return (dispatch) => {
    dispatch({ type: 'LOAD_PHONEME_CHOICES', chosen });
  };
}