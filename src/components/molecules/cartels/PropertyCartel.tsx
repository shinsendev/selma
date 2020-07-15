import React from "react";
import PropertyWithTitleContent from "../../atoms/PropertyWithTitleContent";

const PropertyCartel = ({title, content}) => {
  if (Array.isArray(content)) {
    if (content.length == 0) {
      return null;
    }
  }
  else {
    if (content === null) {
      return null;
    }
  }

  return <PropertyWithTitleContent title={title}  content={content}/>
}

export default PropertyCartel;