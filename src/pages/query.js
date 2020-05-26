import React from "react"
import { graphql } from "gatsby"

const Query = ({ data }) =>  {
  return (
      <div>
        <h1>About {data.mc3.film.title}</h1>
        <p>Content = {data.mc3.film.description}</p>
      </div>
  )
}

export default Query;

export const query = graphql`
  query {
    mc3 {
      film(id: "/api/films/d863687a-7f74-4c45-a904-65480220ade1") {
        title
      }
    }
  }
`