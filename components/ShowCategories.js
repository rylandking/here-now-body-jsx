import React from 'react';

const ShowCategories = () => {
  return (
    <div className="flex md:hidden absolute h-12 w-full bottom-0 left-0 bg-purple-600 text-white cursor-pointer">
      <div className="flex h-full w-full justify-center">
        <span className="self-center text-sm">Show Categories</span>
      </div>
    </div>
  );
};

export default ShowCategories;
