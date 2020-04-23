import React, { Fragment } from 'react';
import Link from 'next/link';

const HeaderLeft = () => (
  <Fragment>
    <Link href="/">
      <div className="w-1/4 lg:w-56 flex justify-start items-center flex-shrink-0 border-b lg:border-r cursor-pointer">
        <span className="ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
          </svg>
        </span>
        <span className="ml-3 font-bold hidden lg:flex">Here Now Body</span>
      </div>
    </Link>
  </Fragment>
);

export default HeaderLeft;
