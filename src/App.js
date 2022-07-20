import React, { useState } from "react";
import { Toaster } from "react-hot-toast"

import TodoModal from './components/TodoModal';
import Button from './components/Button';
import List from './components/List';

export default function Home({todo}) {
  const [showTodoModal, setShowTodoModal] = useState(false);


  return (
    <>
      <TodoModal
        showTodoModal={showTodoModal}
        setShowTodoModal={setShowTodoModal}
        type="add"
      />
      <main className="w-full min-h-screen bg-neutral-200 lg:h-fit pt-20 pb-8 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-8 p-4 w-fit h-fit relative">
          <Button setShowTodoModal={setShowTodoModal} />
          <List />
        </div>
      </main>
      <Toaster />
    </>
  );
}