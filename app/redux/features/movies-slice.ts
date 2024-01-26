import { createSlice } from "@reduxjs/toolkit";

interface Props {
  movies: {
    id: number;
  };
}

export interface MoviesState {
  movies: Props[];
  userRatings: any;
  currentPage: number;
  filmsPerPage: number;
  status: string;
  error: null | string;
}

const initialState: MoviesState = {
  movies: [],
  userRatings: {},
  currentPage: 1,
  filmsPerPage: 8,
  status: "idle",
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMoviesSuccess: (state, action) => {
      state.status = "succeeded";
      state.movies = action.payload;
    },
    getMoviesFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    addRating: (state: MoviesState, action) => {
      const { movieId, rating } = action.payload;
      state.userRatings[movieId] = rating;
    },
    removeRating: (state, action) => {
      const { movieId } = action.payload;
      delete state.userRatings[movieId];
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  getMoviesSuccess,
  getMoviesFailure,
  addRating,
  removeRating,
  setCurrentPage,
} = moviesSlice.actions;

export default moviesSlice.reducer;
