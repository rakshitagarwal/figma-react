import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice.js";
import authSlice from "./authSlice.js";


export const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authSlice.reducer,
  },
});
