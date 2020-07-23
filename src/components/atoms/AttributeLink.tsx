import { Link } from "gatsby";

const AttributeLink = (uuid, content) => {
  return (
    <Link to={/attribute/+uuid}>{content}</Link>
  )
}

export default AttributeLink;