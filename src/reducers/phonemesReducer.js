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
    case "REMOVE_CHOSEN_PHONEMES":
      switch(action.stage) {
        case "beg":
          const currentChosenBeg = [...state.chosenBeg];
          const updatedChosenBeg = [];
          for (const i of currentChosenBeg) {
            if (!action.chosen.include(i)) {
              updatedChosenBeg.push(i);
            } 
          }
          return {
            ...state,  
              chosenBeg: updatedChosenBeg
          } 
        case "mid":
          const currentChosenMid = [...state.chosenMid];
          const updatedChosenMid = [];
          for (const i of currentChosenMid) {
            if (!action.chosen.include(i)) {
              updatedChosenMid.push(i);
            } 
          }
          return {
            ...state,  
              chosenMid: updatedChosenMid
          }
        case "end":
          const currentChosenEnd= [...state.chosenEnd];
          const updatedChosenEnd= [];
          for (const i of currentChosenEnd) {
            if (!action.chosen.include(i)) {
              updatedChosenEnd.push(i);
            } 
          }
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