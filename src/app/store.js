import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../slices/todosSlice";

//The Global store
export const store = configureStore({
  reducer: {
    user: todosReducer,
  },
});