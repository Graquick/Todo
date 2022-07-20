import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";



import Item from "./../components/Item";
import Button from './Button';

const container = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.125,
      delay: 1
    }
  }
}

const child = {
  hidden: { y: 40, opacity: 0},
  visible: { y: 0, opacity: 1}
}

export default function List({ todo, editTodoModal, setEditTodoModal, handleDelete, handleEdit, setShowTodoModal }) {
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
          <AnimatePresence>
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
                className="w-fit lg:w-[330px] flex justify-center cursor-default"
              >
                {" "}
                <p className="border-b-[2px] border-black w-fit pb-4 flex gap-4 items-center text-lg lg:w-[300px]">
                  Start by Adding a new todo
                </p>{" "}
              </motion.div>
            )}
          </AnimatePresence>
          <Button setShowTodoModal={setShowTodoModal} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
