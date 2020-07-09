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

  console.log(process.env.ALGOLIA_ID);
  const searchClient = algoliasearch(
    process.env.ALGOLIA_ID,
    process.env.ALGOLIA_PWD
  );

  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState(''); // replace by an array

  function displayResults() {

    let results = "Result";

    return (

      <p>{results}</p>
    )
  }

  function search(e) {
    let input = e.target.value;

    // create an elastic search query and send it to the server
    console.log(e.target.value);
  }

  function Hit(props) {
    // console.log(props.hit);
    return (
      <div>
        <h2>{props.hit.title}</h2>
        <h2>{props.hit.fullname}</h2>
        <p>{props.releasedYear}</p>
        {props.hit.uuid}
      </div>
    );
  }
  
  return (
    <Layout>
      <Container className='container'  maxWidth="lg">
        <form noValidate autoComplete="off" className="searchForm">
          <TextField id="main-search-field" label="MC2 Search engine" onKeyUp={search}/>
        </form>

        <section className="results-wrappers">
          <div className="results">
            {displayResults()}
          </div>
        </section>

        <div className="ais-InstantSearch">
          <h1>React InstantSearch e-commerce demo</h1>
          <InstantSearch indexName="mc2" searchClient={searchClient}>
            <div className="left-panel">
              <ClearRefinements />
              <h2>Brands</h2>
              <RefinementList attribute="brand" />
              <Configure hitsPerPage={8} />
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