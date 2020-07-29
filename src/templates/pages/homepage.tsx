import React from "react";
import { Link } from "gatsby";
import HomeLayout from "../layout/homeLayout";
import { Container, Paper, Grid, Chip, Typography, Box } from "@material-ui/core";
import "../../styles/homePage.css";
import FaceIcon from '@material-ui/icons/Face';
import FilmsList from "../../components/organisms/FilmsList";
import Info from "../../components/organisms/Info";
import Stat from "../../components/molecules/Stat";
import DownloadBox from "../../components/organisms/DownloadBox";

export default ({ pageContext: { homepage } }) => {
  const infoTitle = "A database for numbers in musicals made between 1927 and 1972";
  const infoContent = ["The project includes this digital humanities research tool: a database defining and categorizing the numbers in film musicals made between 1927 and 1972 along general categories (outlines, music, dance, themes, intertextuality, etc.) and multiple subcategories (number of shots, performance types, topics, musical styles, dancing styles, etc.), all defined in our thesaurus.", " Our long term goal is to include as many films as possible in the database, creating a resource for project members, and eventually other scholars and students, to study the film musical from a variety of corpus studies approaches."];

  return (
    <div className="homepage">
      <HomeLayout>
        <Container className='container' maxWidth="lg">
          <Typography variant="h2" gutterBottom>Database content</Typography>
          <Grid container spacing={1} className='stats-container'>
            <Stat value={homepage.filmsCount} label="Films" />
            <Stat value={homepage.filmsWithNumberCount} label="Films with numbers" />
            <Stat value={homepage.numbersCount} label="Production numbers" />
            <Stat value={homepage.songsCount} label="Songs" />
            <Stat value={homepage.personsCount} label="People" />
            <Stat value={homepage.attributesCount} label="Thesaurus attributes" />
          </Grid>

          <DownloadBox></DownloadBox>

          <Info title={infoTitle} content={infoContent}/>

          <FilmsList title='Films with data' films={homepage.films}></FilmsList>

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
        </Container>
      </HomeLayout>
    </div>
  )
}
