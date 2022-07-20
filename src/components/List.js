import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";



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
              className="w-[600px] lg:w-[330px] text-center flex justify-center cursor-default"
            >
              {" "}
              <p className="bg-neutral-100 w-fit py-4 px-8 text-gray-300 font-medium rounded-full shadow-sm">
                Start by adding a new todo
              </p>{" "}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
