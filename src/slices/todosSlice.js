import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncTodos = createAsyncThunk(
    "todos/fetchAsyncTodos",
    async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      return response.data;
    }
  );
const initialState = {
  todos: {},
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    // reducers: {
    //   removeSelectedMovieOrShow: (state) => {
    //     state.selectMovieOrShow = {};
    //   },
    // },
    reducers: {
      [fetchAsyncTodos.pending]: () => {
        console.log("Pending");
      },
      [fetchAsyncTodos.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, todos: payload };
      },
      [fetchAsyncTodos.rejected]: () => {
        console.log("Rejected!");
      },
    },
});

// export const { addToBasket, removeFromBasket } = todosSlice.actions;

//Selectors - This is how we pull information from the Global Store slice

export const getAllTodos = (state) => state.todos.todos;

export default todosSlice.reducer;