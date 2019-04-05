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
    case "ADD_PHONEME_CHOICES":
      switch(action.stage) {
        case "beg":
          return {
            ...state,  
              chosenBeg: [...state.chosenBeg, ...action.chosen]
          } 
        case "mid":
          return {
            ...state,  
              chosenMid: [...state.chosenMid, ...action.chosen]
          }
        case "end":
          return {
            ...state,  
              chosenEnd: [...state.chosenEnd, ...action.chosen]
          }
        default:
          return;
      }
    case "REMOVE_PHONEME_CHOICES":
      switch(action.stage) {
        case "beg":
          const updatedChosenBeg = state.chosenBeg.filter(phoneme => {
            return !action.chosen.includes(phoneme);
          });
          return {
            ...state,  
              chosenBeg: updatedChosenBeg
          } 
        case "mid":
          const updatedChosenMid= state.chosenMid.filter(phoneme => {
            return !action.chosen.includes(phoneme);
          });
          return {
            ...state,  
              chosenMid: updatedChosenMid
          }
        case "end":
          const updatedChosenEnd = state.chosenEnd.filter(phoneme => {
            return !action.chosen.includes(phoneme);
          });
          return {
            ...state,  
              chosenEnd: updatedChosenEnd
          }
        default:
          return;
      }
    default: 
        return state;
  }

}