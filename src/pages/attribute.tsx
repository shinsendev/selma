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
            <section className='elements-list'>
              <h3 className="properties-title elements-title">{data.mc3.attribute.elements.length} <span className="element-model-title">{title}</span></h3>
              <Grid container spacing={1}>
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
                    <p><span className="properties-title">Category:</span> {data.mc3.attribute.categoryTitle}</p>
                    <p className="properties-title">Definition:</p>
                    <p>{data.mc3.attribute.definition}</p>
                    <p className="properties-title">Example:</p>
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
      attribute(id: "/api/attributes/0a062428-98c6-41b4-a20a-666e506c43f6") {
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