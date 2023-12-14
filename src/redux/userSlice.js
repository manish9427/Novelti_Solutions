// src/redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    createUser: (state, action) => {
      return [...state, action.payload];
    },
    updateUser: (state, action) => {
      const { id, ...updatedUser } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        Object.assign(existingUser, updatedUser);
      }
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const { createUser, updateUser, deleteUser } = userSlice.actions;

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
