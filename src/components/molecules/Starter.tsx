import React from "react";
import "../../styles/components/starter.css";
import Info from "./Info";
import { Container } from "@material-ui/core"


const Starter = (props) => {
  return (
    <div className="starter-wrapper">
      <Container className='container' maxWidth="lg">
          <Info title={props.title} content={props.content} className="starter-info"/>
      </Container>
    </div>
  )
}

export default Starter;