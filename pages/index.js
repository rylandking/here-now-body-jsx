import React, { Fragment } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Articles from '../components/Articles';

const Home = () => (
  <Fragment>
    <Head>
      <title>Here Now Body</title>
    </Head>

    <div className="h-screen block bg-pink-400">
      <Header />
      <div className="flex" style={{ height: 'calc(100% - 65px)' }}>
        <Categories />
        <Articles />
      </div>
    </div>
  </Fragment>
);

export default Home;
