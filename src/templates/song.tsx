import React from "react";
import { graphql, Link } from "gatsby"
import { Paper, Container, Typography, Grid } from '@material-ui/core';
import Layout from "../components/layout";
import "../styles/songPage.css";
import Property from "../components/molecules/Property";

const SongPage = ({ pageContext: { song } }) =>  {
  return (
    <Layout>
      <Container maxWidth="lg" className='container'>
        <Typography variant="h2" className='song-title'>{song.title}</Typography>
        <Grid container spacing={3}>
          {/* general infos */}
          <Grid item xs={12} md={6}>
            <Paper elevation={0}>
              <section className='song-section'>
                <Property data={{"title": "Date", "content": song.year}}/>
                <Property data={{"title": "Song type", "content": song.songTypes, "type":'list', "options": { "listPropertyTitle": "title"}}}/>
              </section>
            </Paper>
          </Grid>

          {/* composers (person) linked to the song */}
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} className='category-section'>
              <section>
                <Property data={{"title": "Composer(s)", "content": song.composers, "type":'list', "options": { "listPropertyTitle": "fullname"}}}/>
                {/* lyricists (person) linked to the song */}
                <Property data={{"title": "Lyricist(s)", "content": song.lyricists, "type":'list', "options": { "listPropertyTitle": "fullname"}}}/>
              </section>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {/* numbers connected */}
          <Grid item xs={12} md={6}>
            <Paper elevation={0}>
              <section className='category-section'>
                <p className='section-title'>Number(s)</p>
                {song.numbers.map((number) => (
                  <Link to={'/number/'+number.uuid}>
                    <div className = 'song-element'>
                      <p>{number.title}</p>
                      <p>Film : {number.film}</p>
                    </div>
                  </Link>
                ))}
              </section>
            </Paper>
          </Grid>

          {/* films connected */}
          <Grid item xs={12} md={6}>
            <Paper elevation={0}>
              <section className='category-section'>
                <p className='section-title'>Film(s)</p>
                { song.films.map((film) => (
                  <Link to={'/film/'+film.uuid}>
                    <div className = 'song-element'>
                      <p>{film.title} ({film.releasedYear})</p>
                    </div>
                  </Link>
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



