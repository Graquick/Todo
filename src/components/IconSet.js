import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';


const icons = [
    { id: 1, href: 'https://github.com/Graquick', icon: 'akar-icons:github-fill', target: '_blank'},
    { id: 2, href: 'https://www.linkedin.com/in/brima-freeman-34aa05238', icon: 'akar-icons:linkedin-box-fill', target: '_blank'},
    { id: 3, href: 'mailto:brimafreeman@outlook.com', icon: 'uil:envelopes', target: '_self'},
]

function IconSet(props) {
  return (
    <>
      <div className="w-[230px] h-[24px] flex justify-between mb-[1.25rem] dark:text-white">
        {icons.map((ic, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.5 }}
          >
            <a
              href={ic.href}
              target={ic.target}
              rel="noopener noreferrer"
            >
              <Icon icon={ic.icon} className="text-[24px] cursor-pointer" />
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default IconSet