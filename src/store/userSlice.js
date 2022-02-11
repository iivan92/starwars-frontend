/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../services/user';

const initialState = {
  isLogged: false,
  status: 'idle',
  response: null,
  error: null,
};

export const registerUserAsync = createAsyncThunk(
  'user/registerUser',
  async ({ email, password }) => {
    const response = await registerUser(email, password);
    return response.data;
  }
);

export const loginUserAsync = createAsyncThunk(
  'user/loginUser',
  async ({ email, password }) => {
    const response = await loginUser(email, password);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.status = 'loading';
        state.response = null;
        state.error = null;
      })
      .addCase(registerUserAsync.fulfilled, (state) => {
        state.status = 'idle';
        state.response = 'Register OK';
        state.error = null;
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
        state.response = null;
      })
      .addCase(loginUserAsync.pending, (state) => {
        state.status = 'loading';
        state.response = null;
        state.error = null;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.isLogged = true;
        state.response = action.payload;
        state.error = null;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.isLogged = false;
        state.error = action.error;
        state.response = null;
      });
  },
});

export const isLogged = (state) => state.user.isLogged;

export default userSlice.reducer;
