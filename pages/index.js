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
    <div className="block w-full">
      <Header />
      <div className="flex">
        <div className="w-1/4 lg:w-56 items-stretch border-r hidden lg:block">
          <Categories />
        </div>
        <div className="w-full items-stretch">
          <Articles />
        </div>
      </div>
    </div>
  </Fragment>
);

export default Home;
