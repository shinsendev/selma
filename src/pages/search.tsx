import React, {useState} from "react";
import Layout from "../components/layout"
import { Container, Grid } from "@material-ui/core"

const SearchPage = () => {
  return (
    <Layout>
      <Container className='container' maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={9} lg={8}>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={4}>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default SearchPage;