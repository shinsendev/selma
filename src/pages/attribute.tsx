import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Paper, Container, Typography, Grid } from '@material-ui/core';
import "../styles/attribute.css";

const AttributePage = ({data}) =>  {
    function displayElements(elements) {
      if (elements.length > 0) {
        let title = '';
        if (data.mc3.attribute.elements.length == 1) {
          title = data.mc3.attribute.model;
        }
        else {
          title = data.mc3.attribute.model+'s';
        }
        return (
          <Paper elevation={0}>
            <section>
              <h3 className="property-title elements-title">{data.mc3.attribute.elements.length} <span className="element-model-title">{title}</span> with {data.mc3.attribute.title}</h3>
              <Grid container spacing={3}>
              {data.mc3.attribute.elements.map(element => (
                <Grid item xs={12} sm={6} lg={6} className='element'>
                    <Typography variant="body1" component="p">{element.title}</Typography>
                </Grid>
              ))}
              </Grid>
            </section>
          </Paper>
        )
      }
    }

    return (
        <Layout>
            <Container maxWidth="md" className="container">
              <h2 className='main-item-title attribute-title'>{data.mc3.attribute.title}</h2>
                <Paper elevation={0}>
                  <section>
                    <p><span className="property-title">Category:</span> {data.mc3.attribute.categoryTitle}</p>
                    <p className="property-title">Definition:</p>
                    <p>{data.mc3.attribute.definition}</p>
                    <p className="property-title">Example:</p>
                    <p>{data.mc3.attribute.example}</p>
                  </section>
                </Paper>
              {displayElements(data.mc3.attribute.elements)}
            </Container>
        </Layout>
    );
};

export default AttributePage;

export const query = graphql`
  {
    mc3 {
      attribute(id: "/api/attributes/1bd09bea-1b8a-426c-9d11-b6a3e0ee3577") {
        title
        categoryTitle
        categoryUuid
        description
        example
        elements
        model
      }
    }
  }
`;