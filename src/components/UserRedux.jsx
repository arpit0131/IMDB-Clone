import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userMiddleware from '../redux/User/middleware';

const UserRedux = () => {
    const { error, loading, user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userMiddleware())
    },[])
  if (error) {
    return <h1>Something went wrong....</h1>;
  }
  if (loading) {
    return <div>Loading....</div>;
  }
  if (user) {
    return (
      <div>
        <h1>User Component</h1>
        <h2>Name:{user.name}</h2>
      </div>
    );
  }
};

export default UserRedux;
