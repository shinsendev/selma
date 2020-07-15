import React from "react";
import { Link } from "gatsby";
import MusicVideoIcon from "@material-ui/icons/MusicVideo";
import { Grid, Typography } from "@material-ui/core";
import {
  Highlight
} from 'react-instantsearch-dom';

const NumberCartel = ({ data }) => {
  const number = data;

  return (
    <Grid item xs={12} md={4} lg={3}>
      <article className="cartel">
        <Link to={/number/+number.uuid}>
            <header className="cartel-title">
              <MusicVideoIcon/>
              <Typography variant="h2">
                {number.title}
              </Typography>
            </header>
            <Typography>Film : {number.film}</Typography>
            {/*<p>{number.uuid} / {number.modelType}</p>*/}
            <Typography>begin tc :{number.startingTc} - ending tc: {number.endingTc}</Typography>
            <Typography>Performers: {number.performers.map(performer => {
              return (
                <span key={performer.uuid}>{performer.fullname}</span>
              )
            })}</Typography>
        </Link>
      </article>
    </Grid>
  )
}

export default NumberCartel;