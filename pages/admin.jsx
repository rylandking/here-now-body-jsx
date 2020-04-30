import React, { Fragment } from 'react';
import Header from '../components/Header';
import { useUser } from '../lib/hooks';

const Admin = () => {
  const [user, { mutate }] = useUser();

  return (
    <Fragment>
      <Header />
      <div>Hello, {user ? user.name : 'stranger'}!</div>
    </Fragment>
  );
};

export default Admin;
