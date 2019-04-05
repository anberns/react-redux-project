export default function addPhonemeChoices(chosen, stage) {
  return (dispatch) => {
    dispatch({ type: 'ADD_PHONEME_CHOICES', chosen, stage });
  };
}