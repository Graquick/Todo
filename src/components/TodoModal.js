import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";

import { addTodo, editTodo } from "../slices/TodoSlice";


const container = {
  hidden: {
    opacity: 0,
    scale: 0.75,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      staggerChildren: 0.4
    }
  },
};

const child = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};


// Remember to add the 'old' todo as the last prop
export default function TodoModal({
  type,
  showTodoModal,
  setShowTodoModal,
  todo,
}) {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("status");
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "edit" && todo) {
      setTitle(todo.title);
      setDeadline(todo.deadline);
      setStatus(todo.status);
    } else {
      setTitle("");
      setDeadline("");
      setStatus("status");
    }
  }, [type, todo, showTodoModal]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") {
      toast.error("Please enter a title");
      return;
    }

    // Add to Local Storage
    if (title && deadline && status) {
      if (type === "add") {
        dispatch(
          addTodo({
            id: uuid(),
            title, // Because key and value are the same, no need to add them twice :)
            deadline,
            status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success("Task Added Successfully");
        setShowTodoModal(false);
      }
      if (type === "edit") {
        if (
          todo.title !== title ||
          todo.deadline !== deadline ||
          todo.status !== status
        ) {
          dispatch(
            editTodo({
              ...todo,
              title,
              deadline,
              status,
            })
          );
          toast.success("Task Updated Successfully");
          setShowTodoModal(false);
        } else {
          toast.error("No Changes Made");
        }
      }
    } else if (title && status) {
      toast.error("Please enter a deadline");
    } else if (title && deadline) {
      toast.error("Please enter a status");
    }
  };

  return (
    <AnimatePresence>
      {showTodoModal && (
        <motion.div
          className="fixed top-0 bottom-0 left-0 right-0 z-20 w-full h-screen bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.form
            variants={container}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="w-[600px] bg-neutral-100 rounded-xl h-fit p-8 flex flex-col gap-8 absolute top-0 bottom-0 left-0 right-0 m-auto lg:w-[350px]"
            onSubmit={(e) => handleSubmit(e)}
          >
            <motion.h1 className="text-lg cursor-default" variants={child}>
              {type === "edit" ? (
                <p className="border-b-2 border-black pb-2 w-[175px]  font-medium shadow-sm">
                  Update
                </p>
              ) : (
                <p className="border-b-2 border-black pb-2 w-[175px]  font-medium shadow-sm">
                  Add new todo
                </p>
              )}{" "}
            </motion.h1>

            <motion.div className="flex flex-col gap-8" variants={child}>
              <input
                variants={child}
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                className="h-12 px-[15px] shadow-sm rounded-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                variants={child}
                type="text"
                name="deadline"
                id="deadline"
                placeholder="Deadline"
                className="h-12 px-[15px] shadow-sm rounded-full"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
              <select
                name="status"
                id="status"
                className="h-12 px-[13px] cursor-pointer shadow-sm rounded-full"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="status" disabled defaultValue>
                  Status
                </option>
                <option value="in-progress">In progress</option>
                <option value="not-started">Not started</option>
                <option value="done">Done</option>
              </select>
            </motion.div>

            <motion.div
              className="flex self-end gap-4 lg:self-center"
              variants={child}
            >
              <motion.button
                type="button"
                className="w-[100px] h-[40px] text-black bg-white shadow-sm"
                onClick={() => setShowTodoModal(false)}
                onKeyDown={() => setShowTodoModal(false)}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 1.25 } }}
              >
                Cancel
              </motion.button>
              <motion.button
                type="submit"
                className="w-[100px] h-[40px] text-white bg-emerald-500 rounded-xl shadow"
              >
                {type === "edit" ? "Update" : "Add"}
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
