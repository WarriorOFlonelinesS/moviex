'use client'
import { Container, Grid } from "@mui/material"
import { Poster } from "./Poster"
import { useEffect, useState } from "react"
import { getPosters } from "../api/getPosters"
export const Main = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getPosters().then(data => setMovies(data.results))
    }, [])

    return (
        <Container>
            <Grid container spacing={{ xs: 1, md: 40 }} columns={{ xs: 1, sm: 1, md: 22 }}>
                {movies.slice(0, 8).map((movie, index) => (
                    <Grid item xs={2} sm={1} md={2} key={index} style={{ marginBottom: '-300px'}}>
                        <Poster movie={movie} />
                    </Grid>
                ))}

            </Grid>
        </Container>
    )
}