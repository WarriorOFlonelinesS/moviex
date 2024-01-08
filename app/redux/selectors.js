import { createSelector } from 'reselect';

const getMovies = (state) => state.movies.movies;
const getCurrentPage = (state) => state.movies.currentPage;
const getFilmsPerPage = (state) => state.movies.filmsPerPage;

export const getCurrentFilm = createSelector(
  [getMovies, getCurrentPage, getFilmsPerPage],
  (movies, currentPage, filmsPerPage) => {
    const lastFilmIndex = currentPage * filmsPerPage;
    const firstFilmIndex = lastFilmIndex - filmsPerPage;
    return movies.slice(firstFilmIndex, lastFilmIndex);
  }
);