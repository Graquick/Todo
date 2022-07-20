import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import { motion, AnimatePresence, Reorder } from "framer-motion";
import { Icon } from "@iconify/react";
import { Toaster } from "react-hot-toast"
import { toast } from "react-hot-toast";

import TodoModal from './components/TodoModal';
import Button from './components/Button';
import List from './components/List';
import { addTodo, deleteTodo, editTodo } from "./slices/TodoSlice";

export default function Home({todo}) {
  const [showTodoModal, setShowTodoModal] = useState(true);


  return (
    <>
      <TodoModal
        showTodoModal={showTodoModal}
        setShowTodoModal={setShowTodoModal}
        type="add"
      />
      <main className="w-full min-h-screen bg-neutral-200 lg:h-fit pt-20 pb-8">
        <div className=" left-0 right-0 flex flex-col gap-8 p-4 m-auto w-fit h-fit relative">
          <Button setShowTodoModal={setShowTodoModal} />
          <List />
        </div>
      </main>
      <Toaster />
    </>
  );
}