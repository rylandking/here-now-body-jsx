import React from 'react';

const TaraTab = () => {
  return (
    <a href="">
      <div className="hidden md:flex absolute h-10 w-32 bottom-0 right-0 justify-center border rounded bg-white text-sm font-light bg-white">
        <div class="flex h-full justify-center">
          <div class="flex-shrink-0 self-center pr-2">
            <img
              class="h-6 w-6 rounded-full"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <span class="self-center"> by Tara Lynn</span>
        </div>
      </div>
    </a>
  );
};

export default TaraTab;
