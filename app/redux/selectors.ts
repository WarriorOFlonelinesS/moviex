import { createSelector } from 'reselect';

export type TMoviesData = {
  type: string;
  id: number;
  release_date: string
};

interface IMoviesState {
  movies : TMoviesData[];
  currentPage: number;
  filmsPerPage: number;
};

export type TState = {
  movies: IMoviesState;
};

const getMovies = (state:TState) => state.movies.movies;
const getCurrentPage = (state: TState) => state.movies.currentPage;
const getFilmsPerPage = (state: TState) => state.movies.filmsPerPage;

export const getCurrentFilm = createSelector(
  [getMovies, getCurrentPage, getFilmsPerPage],
  (movies, currentPage, filmsPerPage) => {
    const lastFilmIndex = currentPage * filmsPerPage;
    const firstFilmIndex = lastFilmIndex - filmsPerPage;
    return movies.slice(firstFilmIndex, lastFilmIndex);
  }
);