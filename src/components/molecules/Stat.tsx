import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core"
import "../../styles/components/stat.css";

const Stat = (props) => {

  return(
    <Grid item xs={6} sm={4} md={4} lg={4}>
      <div className='stat-wrapper'>
          <Paper elevation={0} className='stats-box'>
            <div className="stats">{props.value}</div>
            <Typography variant='body1'>{props.label}</Typography>
          </Paper>
      </div>
    </Grid>
  );
}

export default Stat;