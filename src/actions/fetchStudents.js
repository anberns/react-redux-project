export default function fetchStudents() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_STUDENTS' });
    //return fetch('http://localhost:3000/students')
    return fetch('https://rapid-exchange-api.herokuapp.com/students')
      .then(response => response.json())
      .then(students => dispatch({ type: 'FETCH_STUDENTS', students}));
  };
}