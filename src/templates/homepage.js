import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { Container, Paper, Grid, Chip, Typography, Box } from "@material-ui/core"
import "../styles/homePage.css";

export default ({ pageContext: { homepage } }) => {
  return (
    <div className="homepage">
      <Layout>
        <section className="main">
          <Container className='container' maxWidth="md">

            <Typography variant="h1">Musical MC²</Typography>

            <Grid container spacing={3} className='stats-container'>

              <Grid item xs={12} md={4}>
                <Paper elevation='0' className='stats-box'>
                  <div className="stats">{homepage.filmsCount}</div>
                  <Typography variant='body1'>Films</Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4}>
                <Paper elevation='0' className='stats-box'>
                  <div className="stats">{homepage.filmsWithNumberCount}</div>
                  <Typography variant='body1'>Films with numbers</Typography></Paper>
              </Grid>

              <Grid item xs={12} md={4}>
                <Paper elevation='0' className='stats-box'>
                  <div className="stats">{homepage.numbersCount}</div>
                  <Typography variant='body1'>Production numbers</Typography></Paper>
              </Grid>

            </Grid>

            <Paper elevation='0' className='section'>
              <Typography variant="h2">Films with data</Typography>
              <section className="films-container">
                <Grid container spacing={0}>
                    {homepage.films.map(film => (
                      <Grid item xs={12} md={4} lg={3} className='section film'>
                        <Link to="/film">
                          <Box>
                            <div className="film-title">
                              <Typography variant="h3">{film.title} ({film.releasedYear})</Typography>
                            </div>
                            <img className='poster' src={'http://mc2.labex-arts-h2h.univ-paris8.fr/img/films/'+film.imdb+'.jpg'} alt=""/>
                          </Box>
                        </Link>
                      </Grid>
                    ))}
                </Grid>
              </section>
            </Paper>

            <Paper elevation='0' className = 'section'>
              <Typography variant="h2">Performers</Typography>
                <section className="performers-container">
                  {homepage.performers.map(performer => (
                    <Link to="/person">
                    <Chip
                      label={performer.fullname}
                      variant="outlined"
                      className='chip'
                    />
                    </Link>
                  ))}
                </section>
            </Paper>

            <ul>
              <li><Link to="/film">Film</Link></li>
              <li><Link to="/number">Number</Link></li>
              <li><Link to="/song">Song</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/attribute">Attribute</Link></li>
            </ul>
          </Container>
        </section>
      </Layout>
    </div>
  )
}
