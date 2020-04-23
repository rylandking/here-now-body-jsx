import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Articles from '../components/Articles';

const Home = () => (
  <div className="flex">
    <Head>
      <title>Here Now Body</title>
    </Head>
    <SideNav />
    <div className="block w-full">
      <Header />
      <Articles />
    </div>
  </div>
);

export default Home;
