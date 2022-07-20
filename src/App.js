import React, { useState } from "react";
import { Toaster } from "react-hot-toast"

import TodoModal from './components/TodoModal';
import Button from './components/Button';
import List from './components/List';
import Footer from './components/footer';

export default function Home({todo}) {
  const [showTodoModal, setShowTodoModal] = useState(false);


  return (
    <>
      <TodoModal
        showTodoModal={showTodoModal}
        setShowTodoModal={setShowTodoModal}
        type="add"
      />
      <main className="w-full min-h-screen gap-12 bg-neutral-200 flex flex-col pt-24 items-center relative overflow-hidden">
        <div className=" flex flex-col gap-8 p-4 w-fit h-fit relative mb-44">
          <Button setShowTodoModal={setShowTodoModal} />
          <List />
        </div>
      <Footer />
      </main>
      <Toaster />
    </>
  );
}