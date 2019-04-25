export default function authFail(error) {
  return (dispatch) => {
    dispatch({ type: 'AUTH_FAIL', error });
  };
}