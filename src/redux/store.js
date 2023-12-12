// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    // Add other reducers if needed
  },
});

export default store;
