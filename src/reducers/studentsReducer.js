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
    default: 
        return state;
  }

}