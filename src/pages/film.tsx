import React from "react"
import Layout from "../components/layout";
import { Paper, Container, Typography } from '@material-ui/core';

const FilmPage = ({data}) =>  {
    return (
        <Layout>
            <Container maxWidth="md">
                <Paper>
                    <h2>{data.mc3.film.title}</h2>
                </Paper>
            </Container>
        </Layout>
    );
};

export default FilmPage;

export const query = graphql`
  {
    mc3 {
      film(id: "/api/films/6bd560f7-da50-45ad-be92-b37adc3d686a") {
        title
      }
    }
  }
`