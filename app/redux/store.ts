// store.js
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import { GET_MOVIES } from "./features/movies-slice";
import moviesReducer from "./features/movies-slice";
import { getMoviesSaga } from "./features/saga/movie.saga";

function* saga() {
  yield takeEvery(GET_MOVIES, getMoviesSaga);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export default store;
