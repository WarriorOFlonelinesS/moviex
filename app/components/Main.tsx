// Main.jsx
import React from 'react';
import arrowLeft from '../../public/images/ArrowLeft.svg';
import arrowRight from '../../public/images/ArrowRight.svg';
import { Grid, Button } from "@mui/material";
import { Poster } from "./Poster";
import { SetStateAction, Dispatch } from "react";
import { MainContent } from "../styles";
import { Loading } from "./Loading";
import { Pagination } from "./Pagination";
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { TMoviesData, getCurrentFilm } from '../redux/selectors';
import { setCurrentPage } from '../redux/features/movies-slice';
import { useGetMovies } from '../hooks/useGetMovies';

interface MainProps {
  language: string;
}

interface DispatchApp {
  payload:number,
  type: string
}

export const Main: React.FC<MainProps> = ({ language }) => {
  const dispatch = useAppDispatch();
  useGetMovies();

  const movies = useAppSelector((state: any) => state.movies.movies);
  const currentFilm = useAppSelector(getCurrentFilm); 
  const currentPage = useAppSelector((state: any) => state.movies.currentPage);
  const filmsPerPage = useAppSelector((state: any) => state.movies.filmsPerPage);
  const paginate = (pageNumber: SetStateAction<number>): DispatchApp => dispatch(setCurrentPage(pageNumber));
  const totalPages = Math.ceil(movies.length / filmsPerPage);

  const nextPage = () => dispatch(setCurrentPage(currentPage === totalPages ? 1 : currentPage + 1));
  const prevPage = () => dispatch(setCurrentPage(currentPage === 1 ? totalPages : currentPage - 1));

  return (
    <>
      {movies.length === 0 ? (
        <Loading />
      ) : (
        <MainContent>
          <Grid container spacing={{ xs: 0, md: 12 }}>
            {currentFilm.map((movie:TMoviesData) => (
              <Grid item key={movie.id}>
                <Poster lang={language} movie={movie} />
              </Grid>
            ))}
          </Grid>
          <div className="main-pagination">
            <Button className="btn pagination__btn pagination__btn_left" onClick={prevPage}>
              <Image src={arrowLeft} alt='left' />
            </Button>
            <Pagination
              filmsPerPage={filmsPerPage} totalFilms={movies.length} currentPage={currentPage} paginate={paginate}
            />
            <Button className="btn pagination__btn  pagination__btn_right" onClick={nextPage}>
              <Image src={arrowRight} alt='right' />
            </Button>
          </div>
        </MainContent>
      )}
    </>
  );
};
