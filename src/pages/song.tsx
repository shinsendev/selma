import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";
import { Paper, Container, Typography } from '@material-ui/core';

const SongPage = ({ data }) =>  {

  console.log({data});

  return (
      <Layout>
        <Container maxWidth="md">
        <Paper>
          <h2>{data.mc3.song.title}</h2>

          {/* general informations */}
          <section>
            <p>Date : {data.mc3.song.year}</p>
            <p>Song type : {data.mc3.song.songTypes.map(
              (songType) => (songType.title) + ' ')
            }</p>
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

            {data.mc3.song.numbers.map((number) => (
              <Paper>
                <div>
                  <h4>{number.title}</h4>
                </div>
              </Paper>
            ))}
          </section>

          {/* films conneted */}
          <section>
            <h3>Film(s)</h3>
            {data.mc3.song.films.map((film) => (
              <Paper>
                <div>
            <h4>{film.title} ({film.releasedYear})</h4>
                </div>
              </Paper>
            ))}
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
      song(id: "/api/songs/48f1475e-4f1f-48fb-a14b-53d37dc066d2") {
        title
        year
        numbers
        films
        songTypes
      }
    }    
  }
`


