import React, {useState} from "react";
import Layout from "../components/layout";
import { Container, TextField, Paper, Grid, Typography } from "@material-ui/core"
import "../styles/searchPage.css";
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import MovieIcon from '@material-ui/icons/Movie';
import FaceIcon from '@material-ui/icons/Face';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PieChartIcon from '@material-ui/icons/PieChart';
import 'instantsearch.css/themes/algolia.css';
import { Link } from "gatsby";

const SearchPage = () => {

  console.log(process.env.ALGOLIA_ID);
  console.log(process.env.ALGOLIA_PWD);

  const searchClient = algoliasearch(
    process.env.ALGOLIA_ID,
    process.env.ALGOLIA_PWD
  );

  function displayNumber(number) {
    return (
      <Link to={/number/+number.uuid}>
        <article>
          <header className="cartel-title">
            <PieChartIcon/>
            <Typography variant="h2">
              {number.title}
            </Typography>
          </header>
          <Typography>Film : {number.film}</Typography>
          {/*<p>{number.uuid} / {number.modelType}</p>*/}
          <Typography>begin tc :{number.startingTc} - ending tc: {number.endingTc}</Typography>
          <Typography>Performers: {number.performers.map(performer => {
            return (
              <span>{performer.fullname}</span>
            )
          })}</Typography>
        </article>
      </Link>
    )
  }

  function displayFilm(film) {
    return (
      <Link to={/film/+film.uuid}>
        <article>
          <header className="cartel-title">
            <MovieIcon/>
            <Typography variant="h2">
              <Highlight attribute="title" hit={film} tagName="mark" />
            </Typography>
          </header>

          <Typography>adaptation : {film.adaptation}</Typography>
          <Typography>average number length: {film.averageNumberLength}</Typography>
          <Typography>board: {film.board}</Typography>
          <Typography>censorships: {film.censorships.map(censor => (<span>{censor} ; </span>))}</Typography>
          <Typography>numbers: {film.numbers.map(number => (
            <span>{number.title} ; </span>
          ))}</Typography>
          <Typography>States: <Highlight attribute="states" hit={film} tagName="mark" /></Typography>
        </article>
      </Link>
    )
  }

  function displaySong(song) {
    return (
      <Link to={/song/+song.uuid}>
      <article>
        <header className="cartel-title">
          <MusicNoteIcon/>
          <Typography variant="h2">
            <Highlight attribute="title" hit={song} tagName="mark" />
          </Typography>
        </header>
        <Typography>Composer(s) : {song.composers.map(composer => {(<span>{composer.fullname} ; </span>)})}</Typography>
        <Typography>Song type(s) : {song.songTypes.map(type => {(<span>{type} ; </span>)})}</Typography>
        <Typography>Film(s): {song.films.map(film => {(<span>{film} ; </span>)})}</Typography>
        <Typography>Lyricist(s): {song.lyricists.map(lyricist => {(<span>{lyricist.fullname} ; </span>)})}</Typography>
        <Typography>Year: {song.year}</Typography>
      </article>
      </Link>
    )
  }

  function displayPerson(person) {
    return (
      <Link to={/person/+person.uuid}>
        <article>
          <header className="cartel-title">
            <FaceIcon/>
            <Typography variant="h2">
              <Highlight attribute="fullname" hit={person} tagName="mark" />
            </Typography>
          </header>

        </article>
      </Link>
    )
  }

  function Hit(props) {
    switch (props.hit.modelType) {
      case 'number':
        return displayNumber(props.hit);
      case 'film':
        return displayFilm(props.hit);
      case 'person':
        return displayPerson(props.hit);
      case 'song':
        return displaySong(props.hit);
      default:
        console.log('Error, unrecognized modelType .');
    }

    return null
  }
  
  return (
    <Layout>
      <Container className='container'  maxWidth="lg">
        <h2 className='properties-title'>MC2 search page</h2>
        <Paper className="search-wrapper" elevation={0}>
          <div className="ais-InstantSearch">

            <Grid container spacing={1}>
              <InstantSearch indexName="mc2" searchClient={searchClient}>
                <Grid item xs={12} md={4} lg={3}>
                  <div className="left-panel">
                    <ClearRefinements />
                    <Typography variant='h5'>Item type</Typography>
                    <RefinementList attribute="modelType" />

                    <Typography variant='h5'>Film Released Year</Typography>
                    <RefinementList attribute="releasedYear" />

                    <Typography variant='h5'>Film of a number Released Year</Typography>
                    <RefinementList attribute="films.releasedYear" />
                    <Configure hitsPerPage={25} />
                  </div>
                </Grid>

                <Grid item xs={12} md={8} lg={9}>
                  <div className="right-panel">
                    <SearchBox />

                    {/*<form noValidate autoComplete="off" className="searchForm">*/}
                    {/*  <TextField id="main-search-field" label="MC2 Search engine"></TextField>*/}
                    {/*</form>*/}

                    <Hits hitComponent={Hit} />
                    <Pagination />
                  </div>
                </Grid>

              </InstantSearch>
            </Grid>
          </div>
        </Paper>
      </Container>
    </Layout>
  )
}

export default SearchPage;