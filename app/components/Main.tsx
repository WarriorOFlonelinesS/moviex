'use client'
import {Grid } from "@mui/material"
import { Poster } from "./Poster"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Container1 } from "../styles"
import { fetchMovies } from '../redux/features/movies-slice';
export const Main = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])
    const movies = useSelector(state => state.movies.movies)

    return (
        <Container1 style={{backgroundColor:'#FFE08F', position:'relative'}}>
            <Grid container  spacing={{ xs: 1, md: 12 }} columns={{ xs: 1, sm: 1, md: 22 }}>
                {movies.slice(0, 8).map((movie: {}, index: number) => (
                    <Grid item key={index} style={{}}>
                        <Poster movie={movie} />
                    </Grid>
                ))}

            </Grid>
        </Container1>
    )
}