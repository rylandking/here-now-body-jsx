import React from 'react';

const Categories = () => {
  return (
    <div className="w-56 border-r hidden lg:block bg-blue-100">
      <div className="block">
        <div className="flex w-full h-24">
          <div className="flex justify-center w-1/2 text-xs border h-full font-medium cursor-pointer">
            <div className="block self-center">
              <div className="flex justify-center mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
                </svg>
              </div>
              <span>Back Pain</span>
            </div>
          </div>
          <div className="flex justify-center w-1/2 text-xs border h-full font-medium cursor-pointer">
            <div className="block self-center">
              <div className="flex justify-center mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
                </svg>
              </div>
              <span>Neck Pain</span>
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="flex w-full bg-pink-100">
          <div className="w-1/2 border">Category_3</div>
          <div className="w-1/2 border">Category_4</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
