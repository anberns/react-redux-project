const initialState = {
  students: []
}
export default function studentsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_STUDENTS":
      return {
        ...state, students: action.students
      }
    case "ADD_STUDENT":
      return {
        ...state,  
          students: action.students
        }
    case "DELETE_STUDENT":
      return {
        ...state,  
          students: action.students
        }
    default: 
        return state;
  }

}