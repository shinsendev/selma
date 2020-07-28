import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { Container, Paper, Grid, Chip, Typography, Box } from "@material-ui/core"
import "../styles/homePage.css";
import FaceIcon from '@material-ui/icons/Face';
import FilmsList from "../components/organisms/FilmsList";
import Info from "../components/molecules/Info";
import Stat from "../components/molecules/Stat";

export default ({ pageContext: { homepage } }) => {
  return (
    <div className="homepage">
      <Layout>
        <section className="main">
          <Container className='container' maxWidth="lg">

            <Info title="Musical MC², a collaborative research project on the Hollywood film musical" content="This website is the product of a collaborative research project on the Hollywood film musical launched in 2015 and involving an international team of scholars in film studies, musicology, and dance studies.This archive-based project approaches the film musical genre at the scale of the musical number, rather than the film narrative. Our shared goal is to investigate the cultural and ideological stakes of the musical by focusing in a systematic fashion on the genre’s essential elements: music, dance, and spectacle as combined in the musical number as a vehicle of cinematic meaning." />


            <Typography variant="h2">The data</Typography>
            <Grid container spacing={3} className='stats-container'>
              <Stat value={homepage.filmsCount} label="Films" />
              <Stat value={homepage.filmsWithNumberCount} label="Films with numbers" />
              <Stat value={homepage.numbersCount} label="Production numbers" />
              <Stat value={homepage.songsCount} label="Songs" />
              <Stat value={homepage.personsCount} label="People" />
              <Stat value={homepage.attributesCount} label="Thesaurus attributes" />
            </Grid>

            <Info title="A database for numbers in musicals made between 1927 and 1972" content="The project includes this digital humanities research tool: a database defining and categorizing the numbers in film musicals made between 1927 and 1972 along general categories (outlines, music, dance, themes, intertextuality, etc.) and multiple subcategories (number of shots, performance types, topics, musical styles, dancing styles, etc.), all defined in our thesaurus. Our long term goal is to include as many films as possible in the database, creating a resource for project members, and eventually other scholars and students, to study the film musical from a variety of corpus studies approaches." />

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
