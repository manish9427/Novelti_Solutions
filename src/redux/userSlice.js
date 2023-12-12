// redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    createUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { userId, ...updatedUser } = action.payload;
      const existingUser = state.find((user) => user.id === userId);
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

export const selectUserById = (state, userId) =>
  state.users.find((user) => user.id === userId);

export default userSlice.reducer;
