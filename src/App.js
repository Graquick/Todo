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
      <main className="min-h-screen bg-neutral-200 flex flex-col items-center justify-between gap-52 pt-12">
        <div className="w-fit justify-self-center">
          {/* <Button setShowTodoModal={setShowTodoModal} /> */}
          <List setShowTodoModal={setShowTodoModal} />
        </div>
        <Footer />
      </main>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}