import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";

import { addTodo, editTodo, deleteTodo } from "../slices/TodoSlice";

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

  const status = [
    {
      id: 1,
      color: <div className={`w-2 h-2 bg-green-400 rounded-full`}></div>,
      title: "Done",
    },

    {
      id: 2,
      color: <div className={`w-2 h-2 bg-red-400 rounded-full`}></div>,
      title: "Not started",
    },

    {
      id: 3,
      color: <div className={`w-2 h-2 bg-yellow-400 rounded-full`}></div>,
      title: "In progress",
    },

    {
      id: 4,
      color: <div className={`w-2 h-2 bg-gray-400 rounded-full`}></div>,
      title: "Status not set",
    },
  ];
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

      <div className="flex h-8 gap-12 cursor-default justify-center items-center lg:w-[330px] lg:flex-col lg:h-fit">
        {status.map((sta) => {
          return (
            <div key={sta.id} className="flex items-center gap-4">
              {sta.color}
              <span className="font-medium text-gray-400">{sta.title}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
