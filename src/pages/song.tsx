import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";
import "../styles/songPage.css";
import { Paper, Container, Typography } from '@material-ui/core';

const SongPage = ({ data }) =>  {
  return (
      <Layout>
        <Container maxWidth="md">
          <h2 className='song-title'>{data.mc3.song.title}</h2>

          {/* general infos */}
          <Paper>
            <section className='song-section'>
              <p><span className="property-title">Date:</span> {data.mc3.song.year}</p>
              <p><span className="property-title">Song type:</span> {data.mc3.song.songTypes.map(
                (songType) => (songType.title + ' ')
              )}</p>
            </section>
          </Paper>

            {/* composers (person) linked to the song */}
          <Paper>
            <section className='song-section'>
              <p><span className="property-title">Composer(s): </span>
              {data.mc3.song.composers.map(
                performer => {
                  return performer.fullname + ' ';
                })
              }
              </p>

              {/* lyricists (person) linked to the song */}
              <p><span className="property-title">Lyricist(s): </span>
              {data.mc3.song.lyricists.map(
                lyricist => {
                  return lyricist.fullname + ' ';
                })
              }
              </p>
            </section>
          </Paper>

          {/* numbers connected */}
          <Paper>
            <section className='song-section'>
              <p className='section-title'>Number(s)</p>
                {data.mc3.song.numbers.map((number) => (
                    <div className = 'song-element'>
                      <p>{number.title}</p>
                    </div>
                ))}
            </section>
          </Paper>

          {/* films connected */}
          <Paper>
            <section className='song-section'>
            <p className='section-title'>Film(s)</p>
              {data.mc3.song.films.map((film) => (
                <div className = 'song-element'>
                  <p>{film.title} ({film.releasedYear})</p>
                </div>
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
        composers
        lyricists
      }
    }    
  }
`


