import React from "react";
import { motion } from "framer-motion";
import { CgMathPlus } from "react-icons/cg";

export default function Button({ setShowTodoModal }) {

  return (
    <>
      <motion.button
        className={`absolute w-fit h-fit items-center justify-center rounded-full gap-4 flex -top-8 right-0 z-10`}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.5 }}
      >
        <motion.div
          onClick={() => setShowTodoModal(true)}
          className={` bg-white text-black w-12 h-12 text-2xl flex items-center justify-center rounded-full shadow`}
        >
          <CgMathPlus />
        </motion.div>
      </motion.button>
    </>
  );
}
