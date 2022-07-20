import React from 'react';

import IconSet from './IconSet';

function Footer() {

  return (
    <div>
      <footer className="flex flex-col items-center gap-2 pb-2 lg:w-[300px]">
        <IconSet />
        <span className="w-2/6 h-[2px] bg-black"></span>
        <a
          className="text-center"
          href="https://brimafreeman.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-gray-400">
            Copyright
            <span className="h-4 ml-2 text-black hover:text-sky-500">
              &copy; Brima Freeman 2022{" "}
            </span>
            All rights reserved
          </p>
        </a>
      </footer>
    </div>
  );
}

export default Footer