import { Grid, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";
import {
  Highlight
} from 'react-instantsearch-dom';
import MusicNoteIcon from "@material-ui/icons/MusicNote";

const SongCartel= ({data}) => {
  const song = data;

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

export default SongCartel;

