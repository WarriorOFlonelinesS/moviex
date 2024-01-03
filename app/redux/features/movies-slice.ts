import { createAction, createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
  },
  reducers: {
    getMoviesSuccess: (state, action) => {
      state.status = "succeeded";
      state.movies = action.payload;
    },
    getMoviesFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { getMoviesSuccess, getMoviesFailure } = moviesSlice.actions;
export const GET_MOVIES = "movies/GetMovies";
export const getMovies = createAction(GET_MOVIES);
export const GET_MOVIES_BY_FILTER = "movies/GetMoviesByFilter";
export const getMoviesByFilter = createAction(
  GET_MOVIES_BY_FILTER,
  (payload) => {
    return {
      payload,
    };
  }
);
export const GET_MOVIES_BY_SEARCH = "movies/GetMoviesBySearch";
export const getMoviesBySearch = createAction(
  GET_MOVIES_BY_SEARCH,
  (payload) => {
    return {
      payload,
    };
  }
);
export default moviesSlice.reducer;
