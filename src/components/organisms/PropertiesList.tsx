import React from "react";
import {Paper} from "@material-ui/core";
import Property from "../molecules/Property";

const PropertiesList = ({title, data}) => {
  const propertiesArray = [];
  return (
    <Paper className='category-section' elevation={0}>
      <h2 className='properties-title'>{title}</h2>
        {data.forEach((property, index) => {
          propertiesArray.push(<Property key={index} data={property}/>)
        })}
      {propertiesArray}
    </Paper>
  )
}

export default PropertiesList;