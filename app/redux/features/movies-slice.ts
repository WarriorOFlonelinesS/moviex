import { createSlice, PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Создаем асинхронное действие с использованием createAsyncThunk
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (query) => {
  const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=88850dae741dd06839de667d163566d7&with_genres=28`);
  return response.data;
});

// Создаем срез Redux
const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Обработка успешного завершения запроса
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = 'succeeded';
      // action.payload содержит данные, полученные от TMDb
      state.movies = action.payload.results;
    });
    // Обработка ошибки запроса
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message ;
    });
    // Обработка начала запроса
    builder.addCase(fetchMovies.pending, (state) => {
      state.status = 'loading';
    });
  },
});

export default moviesSlice.reducer;
export const { } = moviesSlice.actions;
