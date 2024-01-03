import { call, put } from "redux-saga/effects";
import axios from "axios";
import { getMoviesSuccess, getMoviesFailure } from "../movies-slice";

export function* getMoviesSaga(): any {
  try {
    const apiKey = "88850dae741dd06839de667d163566d7";

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

    const response = yield call(axios.get, url);
    console.log(response.data.results)
    yield put(getMoviesSuccess(response.data.results));
  } catch (error: any) {
    yield put(getMoviesFailure(error.message));
  }
}

export function* getMoviesByFilterSaga(action: any): any {
  try {
    const { genreId, selectedDate, includeAdult } = action.payload;

    const apiKey = "88850dae741dd06839de667d163566d7";
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&primary_release_date.gte=${selectedDate}&primary_release_date.lte=${selectedDate}&adult=${includeAdult}`;
    const response = yield call(axios.get, url);

    yield put(getMoviesSuccess(response.data.results));

  } catch (error: any) {
    yield put(getMoviesFailure(error.message));
  }
}

export function* getMoviesBySearchSaga(action: any): any {
  try {
    const {searchValue} = action.payload;
  
    const apiKey = "88850dae741dd06839de667d163566d7";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(searchValue)}`;
    const response = yield call(axios.get, url);
    console.log(response.data.results)
    yield put(getMoviesSuccess(response.data.results));
  } catch (error: any) {
    yield put(getMoviesFailure(error.message));
  }

}

const url2 = `https://api.themoviedb.org/3/search/movie?api_key=88850dae741dd06839de667d163566d7&query=Star`;

