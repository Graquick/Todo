import React from 'react'
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { IoMdMailUnread } from 'react-icons/io';

const icons = [
    {id: 1, href: "https://github.com/Graquick", target: "_blank", icon: <AiFillGithub className="text-[20px] cursor-pointer" />},
    {id: 1, href: "https://github.com/Graquick", target: "_blank", icon: <AiFillLinkedin className="text-[20px] cursor-pointer" />},
    {id: 1, href: "mailto:bimu.freeman@outlook.com", target: "_self", icon: <IoMdMailUnread className="text-[20px] cursor-pointer" />},
]

export default function IconSet() {
  return (
    <div className="w-[230px] h-[24px] flex justify-between">
        {icons.map((ic, i) => (
            <motion.div key={i} whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.5 }}>
                <a href={ic.href} target={ic.target}>
                    {ic.icon}
                </a>
            </motion.div>
        ))}
    </div>
  )
}
