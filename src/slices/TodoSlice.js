import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
  // Receive data Todo data from local storage
  const localTodoList = window.localStorage.getItem("todoList");

  // If we get the TodoList we will return it "parsed"
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  // In case of 0 TODOs
  window.localStorage.setItem("todoList", JSON.stringify([]));
  return [];
};

const initialValue = {
  todoList: getInitialTodo(), // This function receives our TodoList as an object, jei!
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);

      // Receive data Todo data from local storage
      const todoList = window.localStorage.getItem("todoList");

      // If we get the todoList we will return it "parsed"
      if (todoList) {
        // Making an array for our TODOs
        const todoListArray = JSON.parse(todoList);

        // Pushing our new TODO to the array
        todoListArray.push({
          ...action.payload,
        });

        // Setting back our TODO list to the local Storage
        window.localStorage.setItem("todoList", JSON.stringify(todoListArray));
      } else {
        window.localStorage.setItem(
          "todoList",
          JSON.stringify([{ ...action.payload }])
        ); // Else statement for situation where todolist key is deleted from local storage
      }
    },
    deleteTodo: (state, action) => {
      // Receive data Todo data from local storage
      const todoList = window.localStorage.getItem("todoList");

      if (todoList) {
        const todoListArray = JSON.parse(todoList);
        todoListArray.forEach((todo, index) => {
          if (todo.id === action.payload) {
            todoListArray.splice(index, 1);
          }
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArray));
        state.todoList = todoListArray; // update state to todoListArray
      }
    },
    editTodo: (state, action) => {
      // Receive data Todo data from local storage
      const todoList = window.localStorage.getItem("todoList");

      if (todoList) {
        const todoListArray = JSON.parse(todoList);
        todoListArray.forEach((todo, index) => {
          if (todo.id === action.payload.id) {
            // payload will not only have the id key => need to specify to id key
            todo.title = action.payload.title;
            todo.deadline = action.payload.deadline;
            todo.status = action.payload.status;
          }
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArray));
        state.todoList = todoListArray; // update state to todoListArray
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
