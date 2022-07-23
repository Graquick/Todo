import React from 'react'
import IconSet from './IconSet';

export default function Footer() {
  return (
    <>
        <footer className="flex flex-col items-center gap-2 pb-2 lg:w-[300px]">
            <IconSet />
            <span className="w-2/6 h-[2px] bg-black"></span>
            <a href="https://brimafreeman.netlify.app/" target="_blank" rel="noopener noreferrer">
                <p className="text-center text-gray-400">
                    Copyright
                    <span className="h-4 ml-2 text-black hover:text-sky-500">
                        &copy; Brima Freeman{" "}
                    </span>
                    All rights reserved
                </p>
            </a>
        </footer>
    </>
  )
}
