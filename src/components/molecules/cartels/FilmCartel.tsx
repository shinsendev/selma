import { Grid, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import MovieIcon from "@material-ui/icons/Movie";
import React from "react";
import {
  Highlight
} from 'react-instantsearch-dom';

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

              <Typography>adaptation : {film.adaptation}</Typography>
              <Typography>average number length: {film.averageNumberLength}</Typography>
              <Typography>board: {film.board}</Typography>
              <Typography>censorships: {film.censorships.map(censor => (<span>{censor} ; </span>))}</Typography>
              <Typography>numbers: {film.numbers.map(number => (
                <span>{number.title} ; </span>
              ))}</Typography>
              <Typography>States: <Highlight attribute="states" hit={film} tagName="mark" /></Typography>
          </Link>
        </article>

      </Grid>
    )
}

export default FilmCartel;