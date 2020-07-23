import React from "react";
import { Link } from "gatsby";

const AttributeLink = ({uuid, content, model}) => {
  const url = '/' + model + '/' + uuid;
  return (
    <Link to={url}>{content}</Link>
  )
}

export default AttributeLink;