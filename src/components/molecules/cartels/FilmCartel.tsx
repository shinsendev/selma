import { Grid, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import MovieIcon from "@material-ui/icons/Movie";
import React from "react";
import {
  Highlight
} from 'react-instantsearch-dom';
import PropertyWithTitleContent from "../../atoms/PropertyWithTitleContent"

const FilmCartel= ({data}) => {
    const film = data;

    return (
      <Grid item xs={12} md={4} lg={3}>
        <article className='cartel'>
          <Link to={/film/+film.uuid}>
              <header className="cartel-title">
                <MovieIcon/>
                <Typography variant="h2">
                  <Highlight attribute="title" hit={film} tagName="mark" />
                </Typography>
              </header>

              <PropertyWithTitleContent title="Released Year " content={film.releasedYear}/>
              <PropertyWithTitleContent title="Studios " content={film.studios.map(studio => (<span>{studio.name} ; </span>))}/>
              <PropertyWithTitleContent title="Director(s) " content={film.directors.map(director => (<span>{director.fullname} ; </span>))}/>
              
          </Link>
        </article>

      </Grid>
    )
}

export default FilmCartel;