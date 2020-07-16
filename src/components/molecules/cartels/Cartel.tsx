import { Grid } from "@material-ui/core";
import React from "react";
import "../../../styles/components/cartel.css";

const Cartel = ({children}) => {
  console.log(children)
  return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <article className="cartel-wrapper">
          {children}
        </article>
      </Grid>
  )
}

export default Cartel;