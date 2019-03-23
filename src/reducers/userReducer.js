const initialState = {
  user: {} 
}
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USER":
      const updatedState = {
        ...state, user: action.user
      }
      return updatedState;
    default: 
        return state;
  }

}