import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Paper, Container, Typography } from '@material-ui/core';

const AttributePage = ({data}) =>  {
    return (
        <Layout>
            <Container maxWidth="md">
                <Paper>
                    <h2>{data.mc3.attribute.title}</h2>
                    <p>from category <b>{data.mc3.attribute.categoryTitle}</b></p>
                </Paper>
            </Container>
        </Layout>
    );
};

export default AttributePage;

export const query = graphql`
  {
    mc3 {
      attribute(id: "/api/attributes/9d962650-cca6-49b7-8939-7e08d6b47fd4") {
        title
        categoryTitle
      }
    }
  }
`;