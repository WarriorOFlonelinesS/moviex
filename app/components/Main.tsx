// Main.jsx
import { Grid } from "@mui/material";
import { Poster } from "./Poster";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container1 } from "../styles";
import { Loading } from "../Loading";
import { getMovies } from "../redux/features/movies-slice";

export const Main = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state):any => state.movies.movies);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  return (
    <>
      {movies.length == 0 ? (
        <Loading />
      ) : (
        <Container1 style={{ backgroundColor: '#FFE08F', position: 'relative' }}>
          <Grid container spacing={{ xs: 1, md: 12 }} columns={{ xs: 1, sm: 1, md: 22 }}>
            {movies.slice(0, 8).map((movie: any, index: number) => (
              <Grid item key={index} style={{}}>
                <Poster movie={movie} index={index} array={movies} />
              </Grid>
            ))}
          </Grid>
        </Container1>
      )}
    </>
  );
};