import { call, put } from "redux-saga/effects";
import axios from "axios";
import { getMoviesSuccess, getMoviesFailure } from "../movies-slice";

export function* getMoviesSaga(action: any): any {
  try {
    const genreId = action.payload;
    console.log(genreId)
    const apiKey = "88850dae741dd06839de667d163566d7";

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;
    const response = yield call(axios.get, url);
    yield put(getMoviesSuccess(response.data.results));
    console.log(response.data);
  } catch (error: any) {
    yield put(getMoviesFailure(error.message));
  }
}
