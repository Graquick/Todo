import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { toast } from "react-hot-toast";

import TodoModal from "./TodoModal";
import { deleteTodo } from "../slices/TodoSlice";

const child = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Item({ todo, deleted, setDeleted }) {
  const dispatch = useDispatch();

  const [editTodoModal, setEditTodoModal] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    setDeleted(true);
    toast.success("Todo Deleted Successfully");
  };

  // This is important why? Because it opens the update Modal, but why?
  const handleEdit = () => {
    setEditTodoModal(true);
  };

  return (
    <>
      <TodoModal
        todo={todo}
        showTodoModal={editTodoModal}
        setShowTodoModal={setEditTodoModal}
        type="edit"
      />
      <motion.div variants={child} whileHover={{ scale: 1.1 }}>
        <div
          className="w-[600px] flex items-center justify-between h-fit py-2 gap-4 cursor-pointer bg-white rounded-full lg:w-[330px]"
          onClick={handleEdit}
          onKeyDown={handleEdit}
          role="button"
          tabIndex={0}
        >
          <div className="flex items-center justify-between h-full gap-4 ml-4">
            {todo.status === "not-started" ? (
              <div
                className={`w-4 h-4 rounded-full bg-red-500 shadow-2xl`}
              ></div>
            ) : todo.status === "in-progress" ? (
              <div
                className={`w-4 h-4 rounded-full bg-yellow-400 shadow-2xl`}
              ></div>
            ) : todo.status === "done" ? (
              <div
                className={`w-4 h-4 rounded-full bg-green-500 shadow-2xl`}
              ></div>
            ) : (
              <div
                className={`w-4 h-4 rounded-full bg-neutral-200 shadow-inner`}
              ></div>
            )}

            <div className="flex flex-col gap-1 cursor-default">
              <span className="font-bold">{todo.title}</span>
              <span className="italic">Deadline: {todo.deadline}</span>
            </div>
          </div>

          <div className="flex items-center justify-center mr-4 text-2xl text-neutral-400">
            <motion.div
              whileHover={{ scale: 1.5, color: "black", rotate: 4 }}
              whileTap={{ scale: 0.5 }}
            >
              <RiDeleteBin5Fill
                className="focus:no-underline focus:outline-none w-[1.5rem] h-[1.5rem] "
                onClick={handleDelete}
                onKeyDown={handleDelete}
                role="button"
                tabIndex={0}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
