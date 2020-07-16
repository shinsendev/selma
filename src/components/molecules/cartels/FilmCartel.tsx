import { Grid, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import MovieIcon from "@material-ui/icons/Movie";
import React from "react";
import { Highlight } from 'react-instantsearch-dom';
import PropertyCartel from "./PropertyCartel";
import Property from "../../molecules/Property";


const FilmCartel= ({data}) => {
    const film = data;

    return (
      <article className='cartel'>
        <Link to={/film/+film.uuid}>
            <header className="cartel-title">
              <MovieIcon/>
              <Typography variant="h2">
                <Highlight attribute="title" hit={film} tagName="mark" />
              </Typography>
            </header>

            <Property data={{"title": "Released Year ", "content": film.releasedYear, "type":'attribute'}}/>
            <Property data={{"title": "Studios ", "content": film.studios, "type":'attributeList'}}/>

            <PropertyCartel title="Studios " content={film.studios.map(studio => (<span>{studio.name} ; </span>))}/>
            <PropertyCartel title="Director(s) " content={film.directors.map(director => (<span>{director.fullname} ; </span>))}/>
        </Link>
      </article>
    )
}

export default FilmCartel;