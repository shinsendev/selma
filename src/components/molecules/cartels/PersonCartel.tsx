import { Grid, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import FaceIcon from "@material-ui/icons/Face";
import React from "react";
import {
  Highlight
} from 'react-instantsearch-dom';

const PersonCartel= ({data}) => {
  const person = data;

  return (
    <Grid item xs={12} md={4} lg={3}>
      <article>
        <Link to={/person/+person.uuid}>
            <header className="cartel-title">
              <FaceIcon/>
              <Typography variant="h2">
                <Highlight attribute="fullname" hit={person} tagName="mark" />
              </Typography>
            </header>
        </Link>
      </article>
    </Grid>
  )
}

export default PersonCartel;

