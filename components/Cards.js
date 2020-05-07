import React from 'react';
import Card from './Card';

const Cards = () => {
  return (
    <div className="p-5 grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 h-full w-full articles-w overflow-y-scroll">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <style jsx>{`
        @media (min-width: 768px) {
          .articles-w {
            width: calc(100% - 222px);
          }
        }
      `}</style>
    </div>
  );
};

export default Cards;
