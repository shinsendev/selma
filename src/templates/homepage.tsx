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

            <Paper elevation={0}>
              <Typography variant="h2">Musical MC², a collaborative research project on the Hollywood film musical</Typography>

              <Typography>This website is the product of a collaborative research project on the Hollywood film musical launched in 2015 and involving an international team of scholars in film studies, musicology, and dance studies.</Typography>

              <Typography>This archive-based project approaches the film musical genre at the scale of the musical number, rather than the film narrative. Our shared goal is to investigate the cultural and ideological stakes of the musical by focusing in a systematic fashion on the genre’s essential elements: music, dance, and spectacle as combined in the musical number as a vehicle of cinematic meaning.</Typography>
            </Paper>


            <Paper elevation={0}>
              <Typography variant="h2">A database for numbers in musicals made between 1927 and 1972</Typography>

              <Typography>The project includes this digital humanities research tool: a database defining and categorizing the numbers in film musicals made between 1927 and 1972 along general categories (outlines, music, dance, themes, intertextuality, etc.) and multiple subcategories (number of shots, performance types, topics, musical styles, dancing styles, etc.), all defined in our thesaurus. Our long term goal is to include as many films as possible in the database, creating a resource for project members, and eventually other scholars and students, to study the film musical from a variety of corpus studies approaches.</Typography>
            </Paper>

            <Typography variant="h2">The data</Typography>
            <Grid container spacing={3} className='stats-container'>
              <Grid item xs={12} md={4}>
                <Paper elevation={0} className='stats-box'>
                  <div className="stats">{homepage.filmsCount}</div>
                  <Typography variant='body1'>Films</Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4}>
                <Paper elevation={0} className='stats-box'>
                  <div className="stats">{homepage.filmsWithNumberCount}</div>
                  <Typography variant='body1'>Films with numbers</Typography></Paper>
              </Grid>

              <Grid item xs={12} md={4}>
                <Paper elevation={0} className='stats-box'>
                  <div className="stats">{homepage.numbersCount}</div>
                  <Typography variant='body1'>Production numbers</Typography></Paper>
              </Grid>
            </Grid>

            <Paper elevation={0} className = 'section'>
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
