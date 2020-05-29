import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";

const SongPage = ({ data }) =>  {
  return (
      <Layout>
        <h1>{data.mc3.song.title}</h1>

        <div>
          <p>Date : {data.mc3.song.year}</p>
          <p>Song type : todo</p>
        </div>

        <div>
          <p></p>
        </div>
      </Layout>
  )
}

export default SongPage;

export const query = graphql`
  query {
    mc3 {
      song(id: "/api/songs/99e3ac0c-46d2-40a0-929a-64a7bf9d36ae") {
        title
        year
      }
    }    
  }
`


