export default function authSuccess(data) {
  return (dispatch) => {
    dispatch({ type: 'AUTH_SUCCESS', data });
  };
}