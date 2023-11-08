import { configureStore, createAction } from "@reduxjs/toolkit";
import { filterReducer } from "./features/Filters/filterSlice";
import { todosReducer } from "./features/Todos/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
  },
  devTools: true,
});
