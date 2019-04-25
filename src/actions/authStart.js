export default function authStart() {
  return (dispatch) => {
    dispatch({ type: 'AUTH_START' });
  };
}