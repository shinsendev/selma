import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";
import { Paper, Container, Typography } from '@material-ui/core';

const SongPage = ({ data }) =>  {
  return (
      <Layout>
        <Container maxWidth="md">
        <Paper>
          <h2>{data.mc3.song.title}</h2>

          {/* general informations */}
          <section>
            <p>Date : {data.mc3.song.year}</p>
            <p>Song type : [ todo ]</p>
          </section>

          {/* composers (person) linked to the song */}
          <section>
            <h3>Composer(s)</h3>
          </section>

          {/* lyricists (person) linked to the song */}
          <section>
            <h3>Lyricist(s)</h3>
            
          </section>

          {/* numbers connected */}
          <section>
            <h3>Number(s)</h3>
          </section>

          {/* films conneted */}
          <section>
            <h3>Film(s)</h3>
          </section>
        </Paper>
        </Container>
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


