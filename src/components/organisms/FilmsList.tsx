import React from "react";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import "../../styles/components/films-list.css";

const FilmsList = ({title, films}) => {

  function displayFilms() {

    const filmsArray = [];

    films.forEach((film, index) => {
      filmsArray.push(
        <Grid item xs={12} md={4} lg={3} className='section film' key={film.uuid}>
          <Link to={/film/+film.uuid}>
            <Box>
              <div className="film-title">
                <Typography variant="h3">{film.title} ({film.releasedYear})</Typography>
              </div>
              <img className='poster' src={'http://mc2.labex-arts-h2h.univ-paris8.fr/img/films/'+film.imdb+'.jpg'} alt=""/>
              {/*<img className='poster' src={'http://mc2.labex-arts-h2h.univ-paris8.fr/img/films/tt0018037.jpg'} alt=""/>*/}
            </Box>
          </Link>
        </Grid>
      )
    });

    return filmsArray;
  }

  return (
    <div className='films-list-component'>
      <Paper elevation={0} className='section'>
        <Typography variant="h2">{films.length} {title}</Typography>
          <section className="films-container">
            <Grid container spacing={0}>
              {displayFilms()}
            </Grid>
          </section>

        <Typography variant="body1">show more</Typography>
      </Paper>
    </div>
  )
}

export default FilmsList;