import React from "react"
import { graphql } from "gatsby"

const SongPage = ({ data }) =>  {
  return (
      <div>
        <h1>About {data.mc3.song.title}</h1>
        <p>Content</p>
      </div>
  )
}

export default SongPage;

export const query = graphql`
  query {
    mc3 {
      song(id: "/api/songs/dca98129-be5b-4b56-9817-690cda14a8e6") {
        title
      }
    }
  }
`