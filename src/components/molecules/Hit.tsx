import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  Highlight
} from 'react-instantsearch-dom';
import MovieIcon from '@material-ui/icons/Movie';
import FaceIcon from '@material-ui/icons/Face';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import 'instantsearch.css/themes/algolia.css';
import { Link } from "gatsby";

const Hit = (props) => {

  function displaySong(song) {
    return (
      <Grid item xs={12} md={4} lg={3}>
        <Link to={/song/+song.uuid}>
          <article>
            <header className="cartel-title">
              <MusicNoteIcon/>
              <Typography variant="h2">
                <Highlight attribute="title" hit={song} tagName="mark" />
              </Typography>
            </header>
            <Typography>Composer(s) : {song.composers.map(composer => {(<span>{composer.fullname} ; </span>)})}</Typography>
            <Typography>Song type(s) : {song.songTypes.map(type => {(<span>{type} ; </span>)})}</Typography>
            <Typography>Film(s): {song.films.map(film => {(<span>{film} ; </span>)})}</Typography>
            <Typography>Lyricist(s): {song.lyricists.map(lyricist => {(<span>{lyricist.fullname} ; </span>)})}</Typography>
            <Typography>Year: {song.year}</Typography>
          </article>
        </Link>
      </Grid>
    )
  }

  function displayPerson(person) {
    return (
      <Grid item xs={12} md={4} lg={3}>
        <Link to={/person/+person.uuid}>
          <article>
            <header className="cartel-title">
              <FaceIcon/>
              <Typography variant="h2">
                <Highlight attribute="fullname" hit={person} tagName="mark" />
              </Typography>
            </header>

          </article>
        </Link>
      </Grid>
    )
  }

  switch (props.hit.modelType) {
    case 'person':
      return displayPerson(props.hit);
    case 'song':
      return displaySong(props.hit);
    default:
      console.log('Error, unrecognized modelType .');
  }

}

export default Hit;