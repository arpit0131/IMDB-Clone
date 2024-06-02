import userSlice from './userSlice';
const actions = userSlice.actions;
const userMiddleware = () => {
  return async function (dispatch) {
    try {
      dispatch(actions.userLoading(true));
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const user = await res.json();
      dispatch(actions.userData(user));
    } catch (err) {
      dispatch(actions.userError());
    } finally {
      dispatch(actions.userLoading(false));
    }
  };
};
export default userMiddleware;

//   try {
//     setLoading(true);
//     const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
//     const user = await res.json();
//     console.log(user.name);
//     setUser(user);
//   } catch (err) {
//     setError(true);
//   } finally {
//     setLoading(false);
//   }
