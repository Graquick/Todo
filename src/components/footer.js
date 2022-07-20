import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

import IconSet from './IconSet';

function Footer() {

  return (
    <div>
      <footer className="items-center flex flex-col absolute left-0 right-0 mx-auto w-fit bottom-[1.5rem]">
        <IconSet />
        <span className="w-2/6 h-[2px] bg-black mb-4"></span>
        <a
          className="flex justify-center flex-grow align-center"
          href="https://brimafreeman.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-gray-400">
            Copyright
            <span className="h-4 ml-2 text-black hover:text-sky-500">&copy; Brima Freeman 2022 </span>
            All rights reserved
          </p>
        </a>
      </footer>
    </div>
  );
}

export default Footer