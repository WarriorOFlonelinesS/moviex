import { createSlice } from "@reduxjs/toolkit";

interface MoviesState {
  movies: any[];
  userRatings:any,
  newRatings: any,
  currentPage: number;
  filmsPerPage: number;
  status:string;
  error: null | string
}

  const initialState: MoviesState = {
    movies: [],
    userRatings: {}, // Змінив userRatings на об'єкт
    newRatings: {},
    currentPage : 1,
    filmsPerPage: 8,  
    status: "idle",
    error: null,
  }


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
    addRating: (state:any, action) => {
      const { movieId, rating } = action.payload;
      state.userRatings[movieId] = rating; // Змінив userRatings на об'єкт і додав новий рейтинг
      state.newRatings[movieId] = recalculateVoteAverage(state.userRatings); // Виправив передачу параметрів
    },
    removeRating: (state:any, action) => {
      const { movieId } = action.payload;
      delete state.newRatings[movieId];
    },
    setCurrentPage: (state:any, action) => {
      state.currentPage=action.payload
    }
  },
});

const recalculateVoteAverage = (ratings:any) => { 
  const totalRatings = Object.values(ratings).reduce((acc:number, rating:any) => acc + rating, 0);
  const averageRating = totalRatings / Object.keys(ratings).length;
  return averageRating;
};

export const { getMoviesSuccess, getMoviesFailure, addRating, removeRating, setCurrentPage } = moviesSlice.actions;

export default moviesSlice.reducer;
