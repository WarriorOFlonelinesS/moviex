import { PrepareAction, createAction } from "@reduxjs/toolkit";

interface Payload {
  value: string;
  language: string;
  genreId: string; // Свойство переименовано с genreId на genre
  selectedDate: null | string | Date | unknown;
  includeAdult: boolean;
}

export const GET_MOVIES = "movies/GetMovies";
export const getMovies = createAction(GET_MOVIES);

export const GET_MOVIES_BY_FILTER = "movies/GetMoviesByFilter";
export const getMoviesByFilter = createAction(
  GET_MOVIES_BY_FILTER,
  (payload: Payload) => ({
    payload,
  })
);

export const GET_MOVIES_BY_SEARCH = "movies/getMoviesBySearch";
export const getMoviesBySearch = createAction(
  GET_MOVIES_BY_SEARCH,
  (payload: { searchValue: string; language: string }) => ({
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
  (payload: { rating: string, movieId: number }) => ({
    payload,
  })
);

export const REMOVE_RATING = "movies/removeRating";
export const removeRating = createAction(REMOVE_RATING,
  (payload: { movieId: number }) => ({
    payload,
  })
  );
