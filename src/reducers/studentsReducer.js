const initialState = {
  students: []
}
export default function studentsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_STUDENTS":
      const updatedState = {
        ...state, students: action.students
      }
      return updatedState;
    case "ADD_STUDENT":
      state = {
        ...state,  
          students: action.students
        }
      return state;
    default: 
        return state;
  }

}