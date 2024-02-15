import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    token: localStorage.getItem("token"),
    userId: localStorage.getItem("userId"),
    isLoggedIn: !!localStorage.getItem("isLoggedIn"),
  },
  reducers: {
    loginSuccess(state, action) {
      state.loading = false;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userId", action.payload.userId);
      localStorage.setItem("isLoggedIn", true);
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.clear();
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export const login = (userData) => async (dispatch) => {
  try {
    // const response = await axios.post("http://localhost:5000/users/login", userData);
    const response = await axios.post("https://userlogin-fg05.onrender.com/users/login", userData);
    if (response.status === 200) {
      dispatch(loginSuccess(response.data.data));
      return response.data;
    }
  } catch (error) {
    alert(error.message);
    dispatch(logout());
  }
};

export const signup = (userData) => async (dispatch) => {
  try {
    // const response = await axios.post("http://localhost:5000/users/register", userData);
    const response = await axios.post("https://userlogin-fg05.onrender.com/users/register", userData);
    if(response.status === 201) return response.data;
  } catch (error) {
    alert(error.message);
    dispatch(logout());
  }
};

export const authActions = authSlice.actions;
export default authSlice;
