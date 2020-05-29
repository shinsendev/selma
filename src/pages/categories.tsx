import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Paper, Container, Typography } from '@material-ui/core';

const CategoriesPage = ({data}) =>  {
    return (
        <Layout>
            <Container maxWidth="md">
                <Paper>
                    <h2>Categories Page</h2>
                    {data.mc3.categories.edges.map(({ node }, index) => (
                      <Paper>
                        <div>
                          <h3>{node.title}</h3>
                          <p>{node.model}</p>
                          <p>{node.description}</p>
                          <p>{node.attributesCount}</p>
                          <div>
                            {node.attributes.map(attribute => (
                              <p>{attribute.title}</p>
                            ))}
                          </div>
                        </div>
                      </Paper>
                    ))}
                </Paper>
            </Container>
        </Layout>
    );
};

export default CategoriesPage;

export const query = graphql`
  {
    mc3 {
      categories {
        edges {
          node {
            model
            title
            description
            attributesCount
            attributes
          }
        }
      }
    }
  }
`;