import { call, put } from "redux-saga/effects";
import axios from "axios";
import { getMoviesSuccess, getMoviesFailure } from "../movies-slice";
import { apiKey, urlFilter, urlSearch } from "@/constans/urls";

export function* getMoviesSaga(): any {
  try {
    const url = `${urlFilter}?api_key=${apiKey}`;
    const response = yield call(axios.get, url);
    yield put(getMoviesSuccess(response.data.results));
  } catch (error: any) {
    yield put(getMoviesFailure(error.message));
  }
}

export function* getMoviesByFilterSaga(action: any): any {
  try {
    const { genreId, selectedDate, includeAdult, language } = action.payload;
    const url = `${urlFilter}?api_key=${apiKey}&with_genres=${genreId}&primary_release_date.gte=${selectedDate}&primary_release_date.lte=${selectedDate}&adult=${includeAdult}&language=${language}`;
    const response = yield call(axios.get, url);
    yield put(getMoviesSuccess(response.data.results));
  } catch (error: any) {
    yield put(getMoviesFailure(error.message));
  }
}

export function* getMoviesBySearchSaga(action: any): any {
  
  try {
    const { searchValue, language } = action.payload;
    console.log(language)
    const url = `${urlSearch}?api_key=${apiKey}&query=${encodeURIComponent(
      searchValue
    )}&language=${language}`;
    const response = yield call(axios.get, url);
    yield put(getMoviesSuccess(response.data.results));
  } catch (error: any) {
    yield put(getMoviesFailure(error.message));
  }
}

export function* getMoviesByLanguageSaga(action: any): any {
  try {
    const { language } = action.payload;
    const url = `${urlFilter}?api_key=${apiKey}&language=${language}`;
    const response = yield call(axios.get, url);
    yield put(getMoviesSuccess(response.data.results));
  } catch (error: any) {
    yield put(getMoviesFailure(error.message));
  }
}
