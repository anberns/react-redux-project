export function addStudent(student) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_ADD_STUDENT' });
    return fetch('http://localhost:3000/students', {
    //return fetch('https://rapid-exchange-api.herokuapp.com/students/create', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: student.name,
        stage: student.stage,
        user_id: '1'
      })
    })
      .then(response => response.json())
      .then(students => dispatch({ type: 'ADD_STUDENT', students}));
  };
}