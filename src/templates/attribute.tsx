import React from "react";
import Layout from "../components/layout";
import { Paper, Container, Typography, Grid } from '@material-ui/core';
import "../styles/attribute.css";
import { Link } from "gatsby";
import PropertiesList from "../components/organisms/PropertiesList"

const AttributePage = ({ pageContext: { attribute } }) =>  {
  function displayElements(elements) {
    if (elements.length > 0) {
      let title = '';
      if (attribute.elements.length == 1) {
        title = attribute.model;
      }
      else {
        title = attribute.model+'s';
      }
      return (
        <Paper elevation={0}>
          <section className='elements-list'>
            <h3 className="properties-title elements-title">{attribute.elements.length} <span className="element-model-title">{title}</span></h3>
            <Grid container spacing={1}>
              {attribute.elements.map(element => (
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
        <h2 className='main-item-title attribute-title'>{attribute.title}</h2>
        <Paper elevation={0}>
          <section>
            <p><span className="properties-title">Category:</span> {attribute.categoryTitle}</p>
            <p className="properties-title">Definition:</p>
            <p>{attribute.definition}</p>
            <p className="properties-title">Example:</p>
            <p>{attribute.example}</p>
          </section>
        </Paper>
        {displayElements(attribute.elements)}
      </Container>
    </Layout>
  );
};

export default AttributePage;