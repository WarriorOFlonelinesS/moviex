import { configureStore } from "@reduxjs/toolkit";
import  moviesReducer  from "../redux/features/movies-slice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
