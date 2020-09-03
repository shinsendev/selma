import { Typography } from "@material-ui/core";
import { Link } from "gatsby";
import FaceIcon from "@material-ui/icons/Face";
import React from "react";
import {
  Highlight
} from 'react-instantsearch-dom';
import Property from "../Property"

const PersonCartel = ({data}) => {
  const person = data;

  return (
    <article className='cartel'>
      <Link to={/person/+person.uuid}>
          <header className="cartel-title">
            <FaceIcon/>
            <Typography variant="h2">
              <Highlight attribute="fullname" hit={person} tagName="mark" />
            </Typography>
          </header>
        <Property data={{"title": "Profession(s)", "content": person.professions, "type":'list'}}/>
      </Link>

    </article>
  )
}

export default PersonCartel;

