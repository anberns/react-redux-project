export default function loadChosenPhonemes(chosen) {
  return (dispatch) => {
    dispatch({ type: 'LOAD_CHOSEN_PHONEMES', chosen });
  };
}