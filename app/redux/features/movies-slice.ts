import { createAction, createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    getMoviesSuccess: (state, action) => {
      state.status = 'succeeded';
      state.movies = action.payload;
    },
    getMoviesFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { getMoviesSuccess, getMoviesFailure } = moviesSlice.actions;
export const GET_MOVIES = "movies/GetMovies";
export const getMovies = createAction(GET_MOVIES, (payload) => {
  console.log(payload)
  return {
    payload,
  };
});

export default moviesSlice.reducer;
