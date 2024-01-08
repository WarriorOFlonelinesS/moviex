import { createAction } from "@reduxjs/toolkit";

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

export const GET_MOVIES_BY_LANGUAGE = "movies/getMoviesByLanguage";
export const getMoviesByLanguage = createAction(
  GET_MOVIES_BY_LANGUAGE,
  (payload) => {
    return {
      payload,
    };
  }
);

export const ADD_RATING = "movies/addRating";
export const addRating = createAction(
    ADD_RATING,
  (payload) => {
    return {
      payload,
    };
  }
);

export const REMOVE_RATING = "movies/removeRating";
export const removeRating = createAction(
    REMOVE_RATING,
  (payload) => {
    return {
      payload,
    };
  }
);

