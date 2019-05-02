export function deleteStudent(id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_DELETE_STUDENT' });
    //return fetch(`http://localhost:3000/students/${id}`, {
    return fetch(`https://rapid-exchange-api.herokuapp.com/students/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id
      })
    })
      .then(response => response.json())
      .then(students => dispatch({ type: 'DELETE_STUDENT', students}));
  };
}