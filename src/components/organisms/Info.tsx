import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
import "../../styles/components/info.css";

const Info = (props) => {
  function displayContent(content:[]):any[] {
    let result = [];

    content.map( (paragraph:any, index:number) => {
      result.push(<Typography variant="subtitle1" key={index} paragraph>{paragraph}</Typography>)
    });

    return result;
  }

  return (
    <Paper elevation={0} className="info-wrapper">
      <div className="text-content">
        <Typography variant="h2" color='primary' gutterBottom>{props.title}</Typography>
        {displayContent(props.content)}
      </div>
    </Paper>
  )
}

export default Info;