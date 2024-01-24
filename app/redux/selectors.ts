import { createSelector } from 'reselect';
import { AppStore } from './store';


const getMovies = (state:AppStore) => state.movies.movies;
const getCurrentPage = (state:AppStore) => state.movies.currentPage;
const getFilmsPerPage = (state) => state.movies.filmsPerPage;

export const getCurrentFilm = createSelector(
  [getMovies, getCurrentPage, getFilmsPerPage],
  (movies, currentPage, filmsPerPage) => {
    const lastFilmIndex = currentPage * filmsPerPage;
    const firstFilmIndex = lastFilmIndex - filmsPerPage;
    return movies.slice(firstFilmIndex, lastFilmIndex);
  }
);