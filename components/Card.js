import React from 'react';

const Card = () => {
  let background =
    'https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&h=260&fit=max&ixid=eyJhcHBfaWQiOjF9';

  return (
    <div
      className="h-56 col-span-1 rounded-lg pt-4 pb-2 px-4 flex flex-col justify-between leading-normal cursor-pointer"
      style={{ backgroundImage: 'url(' + background + ')' }}
    >
      <div className="mb-8">
        <div className="text-white font-bold text-lg tracking-wide mb-2">
          Yoga For Low Back Pain
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex">
          <p className="text-xs text-white flex items-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 4C7 2.34315 8.34315 1 10 1C11.6569 1 13 2.34315 13 4V8C13 9.65685 11.6569 11 10 11C8.34315 11 7 9.65685 7 8V4ZM11 14.9291C14.3923 14.4439 17 11.5265 17 8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8C15 10.7614 12.7614 13 10 13C7.23858 13 5 10.7614 5 8C5 7.44772 4.55228 7 4 7C3.44772 7 3 7.44772 3 8C3 11.5265 5.60771 14.4439 9 14.9291V17H6C5.44772 17 5 17.4477 5 18C5 18.5523 5.44772 19 6 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H11V14.9291Z"
                fill="#fff"
              />
            </svg>
            <span className="pl-1">Podcast</span>
          </p>
        </div>
        <div className="text-sm text-center justify-center">
          <div className="inline-flex items-center justify-center w-32 py-1 rounded-full text-xs font-normal leading-5 bg-yellow-200 text-gray-700">
            <span>Back Pain</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
