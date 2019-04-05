const initialState = {
  phonemes: [],
  chosenBeg: [],
  chosenMid: [],
  chosenEnd: []
}
export default function phonemesReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PHONEMES":
      return {
        ...state, phonemes: action.phonemes
      }
    case "ADD_CHOSEN_PHONEMES":
      switch(action.stage) {
        case "beg":
          return {
            ...state,  
              chosenBeg: [...state.chosenBeg, action.chosen]
          } 
        case "mid":
          return {
            ...state,  
              chosenMid: [...state.chosenMid, action.chosen]
          }
        case "end":
          return {
            ...state,  
              chosenEnd: [...state.chosenEnd, action.chosen]
          }
        default:
          return;
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