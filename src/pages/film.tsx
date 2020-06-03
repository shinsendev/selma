import React from "react"
import Layout from "../components/layout";
import { Paper, Container, Typography } from '@material-ui/core';
import { graphql } from "gatsby";

const FilmPage = ({data}) =>  {
    const uuid = '6bd560f7-da50-45ad-be92-b37adc3d686a';

    return (
        <Layout>
            <Container maxWidth="md">
                <Paper>
                    <h2>{data.mc3.film.title}</h2>
                    <p>{uuid}</p>
                </Paper>
            </Container>
        </Layout>
    );
};

export default FilmPage;

export const query = graphql`
  {
    mc3 {
      film(id: "/api/films/7a733d0b-d172-44ff-8d4f-f70d1f22133f") {
        title
      }
    }
  }
`