import { Container, Grid} from "@mui/material"
import { Poster } from "./Poster"
export const Main = () => {
    return (
        <Container>
            <Grid container style={{marginLeft: '-304px;'}} spacing={{ xs: 1, md: 40 }} columns={{ xs: 1, sm: 1, md: 22 }}>
            {Array.from(Array(8)).map((_, index) => (
                <Grid item xs={2} sm={1} md={2} key={index} style={{marginBottom:'-300px'}} >
                    <Poster />
                </Grid>
            ))}
        </Grid>
        </Container>
    )
}