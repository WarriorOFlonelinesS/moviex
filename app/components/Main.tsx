// Main.jsx
import arrowLeft from '../ArrowLeft.svg';
import arrowRight from '../ArrowRight.svg'
import { Grid } from "@mui/material";
import { Poster } from "./Poster";
import { SetStateAction, useEffect, useState } from "react";
import { Container1 } from "../styles";
import { Loading } from "../Loading";
import { Pagination } from "./Pagination";
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import {getCurrentFilm} from '../redux/selectors'
import { setCurrentPage } from '../redux/features/movies-slice';
import { useGetMovies } from '../hooks/useGetMovies';

export const Main = () => {
  const dispatch = useAppDispatch()
  useGetMovies()
  const movies = useAppSelector((state): any => state.movies.movies);
  const currentFilm = useAppSelector(getCurrentFilm); // Use the selector
  const currentPage = useAppSelector((state): SetStateAction<number> => state.movies.currentPage);
  const filmsPerPage = useAppSelector((state): SetStateAction<number> => state.movies.filmsPerPage);

  const paginate = (pageNumber: SetStateAction<number>): void => dispatch(setCurrentPage(pageNumber));
  const totalPages = Math.ceil(movies.length / filmsPerPage);

  const nextPage = () => {
    const nextPageNumber = currentPage === totalPages ? 1 : currentPage + 1;
    dispatch(setCurrentPage(nextPageNumber));
  };
  
  const prevPage = () => {
    const prevPageNumber = currentPage === 1 ? totalPages : currentPage - 1;
    dispatch(setCurrentPage(prevPageNumber));
  };

  return (
    <>
      {movies.length == 0 ? (
        <Loading/>
      ) : (
        <Container1 style={{ backgroundColor: '#FFE08F', position: 'relative' }}>
          <Grid container spacing={{ xs: 0, md: 12 }}>
            {currentFilm.map((movie: any, index: number) => (
              <Grid item key={index}>
                <Poster style={{paddingLeft: '146px'}} movie={movie} index={index} array={movies}/>
              </Grid>
            ))}
          </Grid>
          <div className="main-pagination">
                    <button className="btn pagination__btn pagination__btn_left" onClick={prevPage}>
                      <Image src={arrowLeft} alt='left'/>
                    </button>
                    <Pagination
               filmsPerPage={filmsPerPage} totalFilms={movies.length} currentPage={currentPage} paginate={paginate}
                    />
                    <button className="btn pagination__btn  pagination__btn_right" onClick={nextPage}>
                    <Image src={arrowRight} alt='right'/>
                    </button>
                </div>
        </Container1>
      )}
    </>
  );
};