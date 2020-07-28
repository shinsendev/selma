import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
import "../../styles/components/info.css";

const Info = (props) => {
  return (
    <Paper elevation={0} className="info-wrapper">
      <div className="text-content">
        <Typography variant="h2">{props.title}</Typography>
        <Typography>{props.content}</Typography>
      </div>
    </Paper>
  )
}

export default Info;