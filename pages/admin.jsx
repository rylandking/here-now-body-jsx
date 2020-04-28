import React, { Fragment, useEffect } from 'react';
import Router from 'next/router';
import Header from '../components/Header';
import { useUser } from '../lib/hooks';

const Admin = () => {
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
      <Header />
      <div>Hello, {user ? user.name : 'stranger'}!</div>
      <button onClick={handleLogout}>Logout</button>
    </Fragment>
  );
};

export default Admin;
