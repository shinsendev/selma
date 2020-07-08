import React from "react";
import {Paper, Typography} from "@material-ui/core";
import "../../styles/components/coworkers-list.css";

const CoworkersList = ({title, data}) => {

  return (
    <div className="coworkers-list-component">
      <Paper className='coworker-section' elevation={0}>
        <h2 className='coworker-section-tite'>{title}</h2>
        <Typography>
        {data.map((person) => {
          return (
            <span className="coworker">{person.fullname} ({person.count}); </span>
          )
        })}
        </Typography>
      </Paper>
    </div>
  )
}

export default CoworkersList;