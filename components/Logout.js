import React, { Fragment, useEffect } from 'react';
import Router from 'next/router';
import { useUser } from '../lib/hooks';

const Logout = () => {
  // call whenever user changes (ex. right after signing up successfully)
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user === null) Router.replace('/');
  });

  const [user, { mutate }] = useUser();

  const handleLogout = async () => {
    await fetch('/api/auth', {
      method: 'DELETE',
    });
    // set the user state to null
    mutate(null);
  };

  return (
    <Fragment>
      {user ? <button onClick={handleLogout}>Logout</button> : null}
    </Fragment>
  );
};

export default Logout;
