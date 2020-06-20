import React from "react";
import { Typography } from "@material-ui/core";

const PropertyWithTitleContent = ({title, content}) => {
  return (
    <Typography variant="body1"><span className='property-title'>{title}: </span>{content}</Typography>
  )
}

export default PropertyWithTitleContent;