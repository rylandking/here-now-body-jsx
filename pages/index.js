import React, { Fragment } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Cards from '../components/Cards';
import TaraTab from '../components/TaraTab';
import CategoriesMobileButton from '../components/CategoriesMobileButton';

const Home = () => (
  <Fragment>
    <Head>
      <title>Here Now Body</title>
    </Head>

    <div className="h-screen block">
      <Header />
      <div className="flex" style={{ height: 'calc(100% - 65px)' }}>
        <Categories />
        <Cards />
      </div>
      <CategoriesMobileButton />
      <TaraTab />
    </div>
  </Fragment>
);

export default Home;
