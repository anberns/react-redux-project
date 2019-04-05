export default function removePhonemeChoices(chosen, stage) {
  return (dispatch) => {
    dispatch({ type: 'REMOVE_PHONEME_CHOICES', chosen, stage });
  };
}