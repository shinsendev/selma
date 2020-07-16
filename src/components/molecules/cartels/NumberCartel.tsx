import React from "react";
import { Link } from "gatsby";
import MusicVideoIcon from "@material-ui/icons/MusicVideo";
import { Typography } from "@material-ui/core";
import {
  Highlight
} from 'react-instantsearch-dom';
import Property from "../Property"

const NumberCartel = ({ data }) => {
  const number = data;
  return (
    <article className="cartel">
      <Link to={/number/+number.uuid}>
          <header className="cartel-title">
            <MusicVideoIcon/>
            <Typography variant="h2">
              <Highlight attribute="title" hit={number} tagName="mark" />
            </Typography>
          </header>

          <Property data={{"title": "Film title", "content": number.film, "type":'attribute'}}/>
          <Property data={{"title": "Performer(s)", "content": number.performers, "type":'list', "options": { "listPropertyTitle": "fullname"}}}/>
          <Property data={{"title": "Performance type", "content": number.performance, "type":'attribute'}}/>
      </Link>
    </article>
  )
}

export default NumberCartel;