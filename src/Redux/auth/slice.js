import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser, logoutUser, refreshUser } from './operations';

const initialState = Object.freeze({
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [loginUser.fulfilled](state, { payload }) {
      const { user, token } = payload;

      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
      state.error = null;
      state.isRefreshing = false;
    },

    [registerUser.fulfilled](state, { payload }) {
      const { user, token } = payload;

      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
      state.error = null;
      state.isRefreshing = false;
    },

    [loginUser.pending](state) {
      state.isRefreshing = true;
    },

    [registerUser.pending](state) {
      state.isRefreshing = true;
    },

    [loginUser.rejected](state, payload) {
      state.error = payload.error;
      state.isRefreshing = false;
    },

    [registerUser.rejected](state, payload) {
      state.error = payload.error;
      state.isRefreshing = false;
    },

    [logoutUser.pending](state) {
      state.isRefreshing = true;
    },

    [logoutUser.fulfilled]() {
      return { ...initialState };
    },

    [logoutUser.error](state, payload) {
      state.error = payload.error;
      state.isRefreshing = false;
    },

    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },

    [refreshUser.fulfilled](state) {
      state.isLoggedIn = true;
      state.error = null;
      state.isRefreshing = false;
    },

    [refreshUser.rejected](state, payload) {
      state.error = payload.error;
      state.isRefreshing = false;
    },
  },
});

export default authSlice.reducer;

export const selectUserState = state => state.user;
