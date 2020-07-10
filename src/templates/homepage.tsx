import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { Container, Paper, Grid, Chip, Typography, Box } from "@material-ui/core"
import "../styles/homePage.css";
import FaceIcon from '@material-ui/icons/Face';
import FilmsList from "../components/organisms/FilmsList";

export default ({ pageContext: { homepage } }) => {
  return (
    <div className="homepage">
      <Layout>
        <section className="main">
          <Container className='container' maxWidth="lg">

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

            <Paper elevation='0' className = 'section'>
              <Typography variant="h2">Performers</Typography>
              <section className="performers-container">
                {homepage.performers.map(performer => (
                  <Link to={/person/ + performer.uuid}>
                    <Chip
                      icon={<FaceIcon />}
                      label={performer.fullname}
                      variant="outlined"
                      className='chip'
                    />
                  </Link>
                ))}
              </section>
            </Paper>

            <FilmsList title='Films with data' films={homepage.films}></FilmsList>


          </Container>
        </section>
      </Layout>
    </div>
  )
}
