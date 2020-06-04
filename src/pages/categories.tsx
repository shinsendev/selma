import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Paper, Container, Typography, Grid } from "@material-ui/core";
import "../styles/categoryPage.css";

const CategoriesPage = ({data}) =>  {
    return (
        <Layout>
            <Container className='container' maxWidth="sm">
                    {data.mc3.categories.edges.map(({ node }) => (
                      <div>
                        <h3 className='category-title'>{node.title} [{node.model}]</h3>

                          <Paper elevation={0}>
                            <section className='category-section'>
                              <h4 className='property-title'>Description</h4>
                              <p>{node.description}</p>
                            </section>
                          </Paper>

                          <Paper elevation={0}>
                            <section className='category-section'>
                            <h4 className='property-title'>Attributes ({node.attributesCount})</h4>
                            <ul>
                              {node.attributes.map(attribute => (
                                <li>{attribute.title}</li>
                              ))}
                            </ul>
                            </section>
                          </Paper>

                      </div>
                    ))}
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