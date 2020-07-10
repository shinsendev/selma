import React, {useState} from "react";
import Layout from "../components/layout";
import { Container, TextField } from "@material-ui/core";
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

const SearchPage = () => {

  const searchClient = algoliasearch(
    process.env.ALGOLIA_ID,
    process.env.ALGOLIA_PWD
  );

  function displayNumber(number) {
    return (
      <article>
        <h2>{number.title} [{number.modelType}]</h2>
        <p>{number.uuid} / {number.modelType}</p>
        <p>begin tc :{number.startingTc} - ending tc: {number.endingTc}</p>
        <p>{number.performers.map(performer => {
          return (
            <span>{performer.fullname}</span>
          )
        })}</p>
      </article>
    )
  }

  function Hit(props) {

    console.log(props.hit.modelType);

    switch (props.hit.modelType) {
      case 'number':
        return displayNumber(props.hit);
        break;
      case 'film':
        console.log('this is a film');
        break;
      case 'person':
        console.log('this is a person');
      case 'song':
        console.log('this is a song');
      default:
        console.log('Error, unrecognized modelType .');
    }

    return null
  }
  
  return (
    <Layout>
      <Container className='container'  maxWidth="lg">
        <form noValidate autoComplete="off" className="searchForm">
          <TextField id="main-search-field" label="MC2 Search engine"/>
        </form>

        <div className="ais-InstantSearch">
          <h1>MC2 search page</h1>

          <InstantSearch indexName="mc2" searchClient={searchClient}>

            <div className="left-panel">
              <ClearRefinements />
              <h2>Types</h2>
              <RefinementList attribute="modelType" />
              <Configure hitsPerPage={25} />
            </div>

            <div className="right-panel">
              <SearchBox />
              <Hits hitComponent={Hit} />
              <Pagination />
            </div>

          </InstantSearch>
        </div>
      </Container>
    </Layout>
  )
}

export default SearchPage;