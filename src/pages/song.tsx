import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";
import "../styles/songPage.css";
import { Paper, Container, Typography, Grid } from '@material-ui/core';

const SongPage = ({ data }) =>  {
  return (
      <Layout>
        <Container maxWidth="md" className='container'>
          <h2 className='song-title'>{data.mc3.song.title}</h2>
          <Grid container spacing={3}>
            {/* general infos */}
            <Grid item xs={12} md={6}>
              <Paper elevation={0}>
                <section className='song-section'>
                  <p><span className="property-title">Date:</span> {data.mc3.song.year}</p>
                  <p><span className="property-title">Song type:</span> {data.mc3.song.songTypes.map(
                    (songType) => (songType.title + ' ')
                  )}</p>
                </section>
              </Paper>
            </Grid>

            {/* composers (person) linked to the song */}
            <Grid item xs={12} sm={6}>
              <Paper elevation={0}>
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
            </Grid>
          </Grid>

          <Grid container spacing={3}>
          {/* numbers connected */}
            <Grid item xs={12} md={6}>
              <Paper elevation={0}>
                <section className='song-section'>
                  <p className='section-title'>Number(s)</p>
                    {data.mc3.song.numbers.map((number) => (
                        <div className = 'song-element'>
                          <p>{number.title}</p>
                        </div>
                    ))}
                </section>
              </Paper>
            </Grid>

            {/* films connected */}
            <Grid item xs={12} md={6}>
              <Paper elevation={0}>
                <section className='song-section'>
                <p className='section-title'>Film(s)</p>
                  {data.mc3.song.films.map((film) => (
                    <div className = 'song-element'>
                      <p>{film.title} ({film.releasedYear})</p>
                    </div>
                  ))}
                </section>
              </Paper>
            </Grid>
          </Grid>
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


