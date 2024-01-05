// Main.jsx
import arrowLeft from '../ArrowLeft.svg';
import arrowRight from '../ArrowRight.svg'
import { Grid } from "@mui/material";
import { Poster } from "./Poster";
import { SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container1 } from "../styles";
import { Loading } from "../Loading";
import { getMovies } from "../redux/features/movies-slice";
import { Pagination } from "./Pagination";
import Image from 'next/image';

export const Main = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state):any => state.movies.movies);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage] = useState(8)

  const paginate = (pageNumber: SetStateAction<number>): void => setCurrentPage(pageNumber);
  ;
  const lastFilmIndex = currentPage * filmsPerPage;
  const firstFilmIndex = lastFilmIndex - filmsPerPage;

  const currentFilm = movies.slice(firstFilmIndex, lastFilmIndex);


  const nextPage = () => {
      setCurrentPage((prev) => (prev === Math.ceil(movies.length / filmsPerPage) ? 1 : prev + 1));
  };

  const prevPage = () => {
      setCurrentPage((prev) => (prev === 1 ? Math.ceil(movies.length / filmsPerPage) : prev - 1));
  };

  return (
    <>
      {movies.length == 0 ? (
        <Loading />
      ) : (
        <Container1 style={{ backgroundColor: '#FFE08F', position: 'relative' }}>
          <Grid container spacing={{ xs: 1, md: 12 }} columns={{ xs: 1, sm: 1, md: 22 }}>
            {currentFilm.map((movie: any, index: number) => (
              <Grid item key={index}>
                <Poster movie={movie} index={index} array={movies} />
              </Grid>
            ))}
          </Grid>
          <div className="main-pagination">
                    <button className="btn pagination__btn pagination__btn_left" onClick={prevPage}>
                      <Image src={arrowLeft} alt='left'/>
                    </button>
                    <Pagination
                        filmsPerPage={filmsPerPage}
                        totalFilms={movies.length}
                        paginate={paginate}
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