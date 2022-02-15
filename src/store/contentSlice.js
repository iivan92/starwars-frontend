/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getAllPeople,
  getAllPlanets,
  getAllStarships,
} from '../services/content';

const initialState = {
  status: 'idle',
  error: null,
  people: [],
  planets: [],
  starships: [],
};

export const getAllPeopleAsync = createAsyncThunk(
  'content/getAllPeople',
  async () => {
    let response = {};
    try {
      response = await getAllPeople();
    } catch (err) {
      console.log('🚀 ~ file: contentSlice.js ~ line 24 ~ err', err);
    }
    return response;
  }
);

export const getAllPlanetsAsync = createAsyncThunk(
  'content/getAllPlanets',
  async () => {
    const response = await getAllPlanets();
    return response;
  }
);

export const getAllStarshipsAsync = createAsyncThunk(
  'content/getAllStarships',
  async () => {
    const response = await getAllStarships();
    return response;
  }
);

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPeopleAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getAllPeopleAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.error = null;
        state.people = action.payload;
      })
      .addCase(getAllPeopleAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
        state.people = [];
      })
      .addCase(getAllPlanetsAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getAllPlanetsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.error = null;
        state.planets = action.payload;
      })
      .addCase(getAllPlanetsAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
        state.planets = [];
      })
      .addCase(getAllStarshipsAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getAllStarshipsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.error = null;
        state.starships = action.payload;
      })
      .addCase(getAllStarshipsAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
        state.starships = [];
      });
  },
});

export default contentSlice.reducer;
