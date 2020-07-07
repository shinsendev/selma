import React from "react";
import {Paper} from "@material-ui/core";

const CoworkersList = ({title, data}) => {

  console.log(data);
  return (
    <Paper className='coworker-section' elevation={0}>
      <h2 className='coworker-section-tite'>{title}</h2>
      {data.map((person) => {
        return (
          <span>{person.fullname} ({person.count}); </span>
        )
      })}

    </Paper>
  )
}

export default CoworkersList;