const initialState = {
  phonemes: []
}
export default function phonemesReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PHONEMES":
      return {
        ...state, phonemes: action.phonemes
      }
    case "LOAD_CHOSEN_PHONEMES":
      return {
        ...state,  
          chosen: action.chosen
        }
        /*
    case "DELETE_STUDENT":
      return {
        ...state,  
          students: action.students
        }
        */
    default: 
        return state;
  }

}