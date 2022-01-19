import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  todoId: null,
  todoTitle: "",
};


//Actions
const todosSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      viewUser: (state, action) => {
        state.userId = action.payload.userId       
      },
      viewTodoid: (state, action) => {
        state.todoId = action.payload.todoId       
      },
      viewTodotitle: (state, action) => {
        state.todoTitle = action.payload.todoTitle       
      }
    },
});

export const { viewUser } = todosSlice.actions;
export const { viewTodoid } = todosSlice.actions;
export const { viewTodotitle } = todosSlice.actions;


//Selectors 
export const selectUserId = (state) => state.user.userId;
export const selectTodoId = (state) => state.user.todoId;
export const selectTodoTitle = (state) => state.user.todoTitle;

export default todosSlice.reducer;