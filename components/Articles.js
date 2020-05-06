import React from 'react';
import Article from './Article';

const Articles = () => {
  return (
    <div className="p-5 grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 h-full w-full articles-w overflow-y-scroll">
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
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

export default Articles;
