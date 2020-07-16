import { Typography } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";
import {
  Highlight
} from 'react-instantsearch-dom';
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Property from "../Property"

const SongCartel= ({data}) => {
  const song = data;
console.log(song);
  return (
    <article className='cartel'>
      <Link to={/song/+song.uuid}>
          <header className="cartel-title">
            <MusicNoteIcon/>
            <Typography variant="h2">
              <Highlight attribute="title" hit={song} tagName="mark" />
            </Typography>
          </header>

          <Property data={{"title": "Composer(s)", "content": song.composers, "type":'list', "options": { "listPropertyTitle": "fullname"}}}/>
          <Property data={{"title": "Lyricist(s)", "content": song.lyricists, "type":'list', "options": { "listPropertyTitle": "fullname"}}}/>
          <Property data={{"title": "Date(s)", "content": song.year, "type": "attribute" }}/>
      </Link>
    </article>
  )
}

export default SongCartel;

