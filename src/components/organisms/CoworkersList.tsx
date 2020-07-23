import React from "react";
import {Paper, Typography} from "@material-ui/core";
import "../../styles/components/coworkers-list.css";
import AttributeLink from "../atoms/AttributeLink"


const CoworkersList = ({title, data}) => {

  function displayCowokers() {
    // we display the lists only if there are some coworkers
    if (data.length == 0) {
      return null;
    }

    return (
      <div className="coworkers-list-component">
        <Paper className='coworker-section' elevation={0}>
          <h2 className='coworker-section-tite'>{title}</h2>
          <Typography>
            {data.map((person) => {
              return (
                <span className="coworker" key={person.uuid}>
              <AttributeLink content={person.fullname} model="person" uuid={person.uuid}/>
                  {" ("+person.count+ ") ; "}
            </span>
              )
            })}
          </Typography>
        </Paper>
      </div>
    )
  }

  return displayCowokers();
}

export default CoworkersList;