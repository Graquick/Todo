import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import { CgMathPlus } from "react-icons/cg";

const spring = {
  duration: 0.1,
  type: "spring",
  stiffness: 500,
  damping: 25,
};

export default function Button({ setShowTodoModal }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        className={`absolute w-fit h-fit items-center justify-center rounded-full gap-4 flex -top-12 right-[1.4rem] z-10`}
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
