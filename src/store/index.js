/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import contentReducer from './contentSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    content: contentReducer,
  },
});
