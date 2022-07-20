import React, { useState } from "react";
import { Toaster } from "react-hot-toast"

import TodoModal from './components/TodoModal';
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
      <main className="flex flex-col items-center justify-between min-h-screen pt-12 bg-neutral-200 gap-52">
        <div className="top-0 left-0 right-0 m-auto mlg:bottom-0">
          <div className="w-fit justify-self-center">
            {/* <Button setShowTodoModal={setShowTodoModal} /> */}
            <List setShowTodoModal={setShowTodoModal} />
          </div>
        </div>
        <Footer />
      </main>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}