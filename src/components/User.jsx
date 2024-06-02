import React, { useEffect, useState } from 'react';

const User = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await res.json();
        console.log(user.name);
        setUser(user);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

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

export default User;
