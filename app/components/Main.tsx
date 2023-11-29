'use client'
import {Grid } from "@mui/material"
import { Poster } from "./Poster"
import { useEffect, useState } from "react"
import { getPosters } from "../api/getPosters"
import { Container1 } from "../styles"
export const Main = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getPosters().then(data => setMovies(data.results))
    }, [])

    return (
        <Container1 style={{backgroundColor:'#FFE08F', position:'relative'}}>
            <Grid container  spacing={{ xs: 1, md: 12 }} columns={{ xs: 1, sm: 1, md: 22 }}>
                {movies.slice(0, 8).map((movie, index) => (
                    <Grid item key={index} style={{}}>
                        <Poster movie={movie} />
                    </Grid>
                ))}

            </Grid>
        </Container1>
    )
}