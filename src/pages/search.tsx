import React from "react";
import Layout from "../components/layout";
import { Container, TextField, Paper, Grid, Typography } from "@material-ui/core";
import "../styles/searchPage.css";
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Pagination,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import 'instantsearch.css/themes/algolia.css';
import { graphql } from "gatsby";
import Hits from "../components/organisms/Hits";
import { RangeInput, RangeSlider } from 'react-instantsearch-dom';

const SearchPage = ({data}) => {

  const searchClient = algoliasearch(
    data.site.siteMetadata.algoliaId,
    data.site.siteMetadata.algoliaPwd
  );

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

                    <Typography variant='h5'>Film Date</Typography>
                    <RefinementList attribute="releasedYear" />

                    <Typography variant='h5'>Sample</Typography>
                    <RefinementList attribute="sample" />

                    <Typography variant='h5'>Film Length</Typography>
                    <RefinementList attribute="length" />

                    <Typography variant='h5'>Number Length</Typography>
                    <RefinementList attribute="numbersLength" />

                    {/*<Typography variant='h5'>Film of a number Released Year</Typography>*/}
                    {/*<RefinementList attribute="films.releasedYear" />*/}
                    <Configure hitsPerPage={24} />
                  </div>
                </Grid>

                <Grid item xs={12} md={8} lg={9}>
                  <div className="right-panel">

                    <section className="search-box">
                      <SearchBox />
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
