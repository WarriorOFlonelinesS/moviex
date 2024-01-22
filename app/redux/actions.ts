import { createAction } from "@reduxjs/toolkit";
import { State } from "../components/Header";

export const GET_MOVIES = "movies/GetMovies";
export const getMovies = createAction(GET_MOVIES);

export const GET_MOVIES_BY_FILTER = "movies/GetMoviesByFilter";
export const getMoviesByFilter = createAction(GET_MOVIES_BY_FILTER,
  (payload: State) => ({
    payload,
  })
);

export const GET_MOVIES_BY_SEARCH = "movies/getMoviesBySearch";
export const getMoviesBySearch = createAction(
  GET_MOVIES_BY_SEARCH,
  (payload: { searchValue: string }) => ({
    payload,
  })
);
export const GET_MOVIES_BY_LANGUAGE = "movies/getMoviesByLanguage";
export const getMoviesByLanguage = createAction(
  GET_MOVIES_BY_LANGUAGE,
  (payload: { language: string }) => ({
    payload,
  })
);

export const ADD_RATING = "movies/addRating";
export const addRating = createAction(
  ADD_RATING,
  (payload: { raiting: number }) => ({
    payload,
  })
);

export const REMOVE_RATING = "movies/removeRating";
export const removeRating = createAction(REMOVE_RATING);
