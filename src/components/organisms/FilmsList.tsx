import React, { useState } from "react";
import { Box, Grid, Paper, Typography, Button } from "@material-ui/core";
import { Link } from "gatsby";
import "../../styles/components/films-list.css";
import Image from '../molecules/Image';

const FilmsList = ({title, films}) => {
  const [filmsDisplayed, setFilmsDisplayed] = useState(getFilmsToDisplay());
  const filmUrl = 'https://mc3-website.s3.eu-west-3.amazonaws.com/poster/';
  const noImageUrl = 'https://mc3-website.s3.eu-west-3.amazonaws.com/website/no-image3.jpg';
  // const filmUrlLabex = 'http://mc2.labex-arts-h2h.univ-paris8.fr/img/films/';

  function getFilmsToDisplay() {
    return films.slice(0, 12);
  }

  function addFilmsToDisplay():void {
    if (filmsDisplayed.length < films.length) {
      setFilmsDisplayed(films);
    }
  }

  function displayShowmore() {
    if (filmsDisplayed.length >= films.length) {
      return null;
    }

    return (<Button className="showmore" color="primary" variant="outlined" >Show more</Button>);
  }

  function displayFilms(limit:number=10, offset:number=0) {
    const filmsArray = [];

    filmsDisplayed.forEach((film) => {
      filmsArray.push(
        <Grid item xs={6} sm={6} md={3} lg={2} className='section film' key={film.uuid}>
          <Link to={/film/+film.uuid}>
            <Box>
              <div className="film-title">
                <Typography variant="h3">{film.title} ({film.releasedYear})</Typography>
              </div>
              <Image url={filmUrl+film.imdb+'.jpg'} alt='Cover of the film' noImageUrl={noImageUrl}/>
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
              {displayFilms(10)}
            </Grid>
          </section>

        <div onClick={addFilmsToDisplay} className="showmore-wrapper">
          {displayShowmore()}
        </div>

      </Paper>
    </div>
  )
}

export default FilmsList;