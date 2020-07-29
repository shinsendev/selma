import React from "react";
import Layout from "../templates/layout";
import { Container, Paper, Grid, Typography, Tooltip, Fab } from "@material-ui/core";
import "../styles/searchPage.css";
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Pagination,
} from 'react-instantsearch-dom';
import 'instantsearch.css/themes/algolia.css';
import { graphql } from "gatsby";
import Hits from "../components/organisms/Hits";
import Facets from "../components/organisms/Facets";

const SearchPage = ({data}) => {

  const searchClient = algoliasearch(
    data.site.siteMetadata.algoliaId,
    data.site.siteMetadata.algoliaPwd,
  );

  return (
    <Layout>
      <Container className='container'  maxWidth="lg">
        <Paper className="search-wrapper" elevation={0}>
          <div className="ais-InstantSearch">
            <Grid container spacing={1}>

              <InstantSearch indexName="mc2" searchClient={searchClient}>
                <Grid item xs={12} md={4} lg={3}>
                  <div className="left-panel" >
                    <Facets/>
                  </div>
                </Grid>

                <Grid item xs={12} md={8} lg={9}>
                  <div className="right-panel">

                    <section className="search-box">
                      <SearchBox translations={{ placeholder: "All items are searchable: not only the titles and artists’ names, but also the categories from the thesaurus" }} />
                    </section>

                    <section className="search-results">
                      <Grid container spacing={1}>
                        <Hits />
                      </Grid>
                    </section>

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

export const query = graphql`
{
  site {
      siteMetadata {
        algoliaId
        algoliaPwd
      }
    }
}
`;
