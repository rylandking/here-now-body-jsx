import React, { Fragment } from 'react';
import Header from '../components/Header';
import { useUser } from '../lib/hooks';

const Admin = () => {
  const [, { mutate }] = useUser();
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
      <button onClick={handleLogout}>Logout</button>
    </Fragment>
  );
};

export default Admin;
