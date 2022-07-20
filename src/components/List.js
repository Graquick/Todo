import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowRightUpLine } from "react-icons/ri";



import Item from "./../components/Item";

const container = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.35,
      delay: 1
    }
  }
}

const child = {
  hidden: { y: 40, opacity: 0},
  visible: { y: 0, opacity: 1}
}

export default function List({ todo, editTodoModal, setEditTodoModal, handleDelete, handleEdit }) {
    const [deleted, setDeleted] = useState(false);

  const todoList = useSelector((state) => state.todo.todoList);

  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time)); // Not necessary ?

  return (
    <>
      <AnimatePresence>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="w-fit h-fit flex flex-col gap-4"
        >
          {sortedTodoList && sortedTodoList.length > 0 ? (
            sortedTodoList.map((todo, i) => (
              <Item
                key={todo.id}
                todo={todo}
                deleted={deleted}
                setDeleted={setDeleted}
              />
            ))
          ) : (
            <motion.div
              variants={child}
              className="w-fit lg:w-[330px] flex justify-center  cursor-default"
            >
              {" "}
              <p className="border-b-[2px] border-black w-fit pb-4 pr-8 flex gap-4 items-center text-lg lg:w-[300px]">
                Start by Adding a New Todo
                <RiArrowRightUpLine className="text-2xl"/>
              </p>{" "}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
