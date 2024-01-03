// store.js
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import { GET_MOVIES, GET_MOVIES_BY_FILTER, GET_MOVIES_BY_SEARCH,  } from "./features/movies-slice";
import moviesReducer from "./features/movies-slice";
import { getMoviesByFilterSaga, getMoviesBySearchSaga, getMoviesSaga } from "./features/saga/movie.saga";

function* saga() {
  yield takeEvery(GET_MOVIES, getMoviesSaga);
  yield takeEvery(GET_MOVIES_BY_FILTER, getMoviesByFilterSaga)
  yield takeEvery(GET_MOVIES_BY_SEARCH, getMoviesBySearchSaga)
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
