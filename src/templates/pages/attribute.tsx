import React from "react";
import Layout from "../layout/layout";
import { Paper, Container, Typography, Grid, Chip } from "@material-ui/core"
import "../../styles/attribute.css";
import Property from "../../components/molecules/Property";
import Chronology from "../../components/organisms/Chronology";
import BuildIcon from "@material-ui/icons/BubbleChart"
import MusicVideoIcon from "@material-ui/icons/MusicVideo";
import MovieIcon from "@material-ui/icons/Movie";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

import { Link } from "gatsby";

const AttributePage = ({ pageContext: { attribute } }) =>  {
  function getIcon(type:string) {
    if (type == 'number') {
      return <MusicVideoIcon />
    }

    if (type == 'film') {
      return <MovieIcon />
    }

    if (type == 'song') {
      return <MusicNoteIcon />
    }
  }

  function displayYears(years:any[]):string {
    let response = ' ';

    years.map(year =>  {
      response += year+' ';
    })

    return response
  }

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

            <div className="elements-wrapper">
              {attribute.elements.map(element => (
                <Link to={"/"+attribute.model+"/" + element.uuid}>
                <Chip
                  icon={getIcon(attribute.model)}
                  label={element.title+" ("+displayYears(element.years)+")"}
                  variant="outlined"
                  className='chip'
                  clickable={true}
                />
                </Link>
              ))}
            </div>
          </section>
        </Paper>
      )
    }
  }

  return (
    <div className="attribute-page">
      <Layout>
        <Container maxWidth="md" className="container">
          <h2 className='main-item-title attribute-title'>{attribute.title}</h2>
          <Paper elevation={0}>
            <section>
              <Property data={{"title": "Category", "content": attribute.categoryTitle, "type":'category', "model":"category", "uuid":attribute.categoryUuid }}/>
              <Property data={{"title": "Definition", "content": attribute.description }}/>
              <Property data={{"title": "Example", "content": attribute.example }}/>
            </section>
          </Paper>

          <Chronology data={attribute.elements}/>

          {displayElements(attribute.elements)}
        </Container>
      </Layout>
    </div>
  );
};

export default AttributePage;