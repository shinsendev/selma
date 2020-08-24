import React,  { useState, useEffect } from "react";
import Layout from "../layout/layout";
import { Paper, Container, Typography, Grid, Chip, CircularProgress } from "@material-ui/core"
import "../../styles/attribute.css";
import Property from "../../components/molecules/Property";
import Chronology from "../../components/organisms/Chronology";
import MusicVideoIcon from "@material-ui/icons/MusicVideo";
import MovieIcon from "@material-ui/icons/Movie";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

import { Link } from "gatsby";

const AttributePage = ({ pageContext: { attribute } }) =>  {
  const attributeData = {
    uuid: attribute.uuid,
    title: attribute.title,
    categoryTitle: attribute.categoryTitle,
    categoryUuid: attribute.categoryUuid,
    description: attribute.description,
    example: attribute.example,
    elements: [],
    model: attribute.model,
  };

  const [attributePageDataState, setAttributePageDataState] = useState(attributeData);
  const [isFetchingState, setIsFetching] = useState(false);
  let apiLink = process.env.MC3_REST_URL;

  function getSongDates(item):any[] {
    let songDates = [];
    item.films.map(film => {
      songDates.push(film.releasedYear);
    });
    return songDates;
  }

  // get data from MC3 api
  useEffect(() => {
    setIsFetching(true);

    // because of .env used only at build time
    if (typeof(apiLink) == 'undefined' || apiLink == '') {
      apiLink = 'https://api.mc2.website/api';
    }

    fetch(apiLink+'/attributes/'+attributePageDataState.uuid+'/'+attributePageDataState.model+'s.json')
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        let items = [];
        resultData.map(item => {
          items.push({
            "uuid": item.uuid,
            "title": item.title,
            "years": attributePageDataState.model == 'song' ? getSongDates(item): [item.releasedYear] //use a function by modeltype, for song, get the years of the films connected to the song
          });
        });

        setIsFetching(false);
        setAttributePageDataState({
          ...attributePageDataState, elements: items
        });
      })
  }, [])

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
      if (attributePageDataState.elements.length == 1) {
        title = attributePageDataState.model;
      }
      else {
        title = attributePageDataState.model+'s';
      }
      return (
        <Paper elevation={0}>
          <section className='elements-list'>
            <h3 className="properties-title elements-title">{elements.length} <span className="element-model-title">{title}</span></h3>

            <div className="elements-wrapper">
              {elements.map(element => (
                <Link to={"/"+attributePageDataState.model+"/" + element.uuid}>
                  <Chip
                    icon={getIcon(attributePageDataState.model)}
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

  function displayChronology(elements) {
    if (isFetchingState) {
      return (
        <div className='loader-wrapper'>
            <Paper elevation={0}>
            <Typography>Loading Chronology chart...</Typography>
            <CircularProgress className='loader' color="primary" />
          </Paper>
        </div>
      )}

    return <Chronology data={elements}/>
  }

  return (
    <div className="attribute-page">
      <Layout>
        <Container maxWidth="md" className="container">
          <h2 className='main-item-title attribute-title'>{attributePageDataState.title}</h2>
          <Paper elevation={0}>
            <section>
              <Property data={{"title": "Category", "content": attributePageDataState.categoryTitle, "type":'category', "model":"category", "uuid":attributePageDataState.categoryUuid }}/>
              <Property data={{"title": "Definition", "content": attributePageDataState.description }}/>
              <Property data={{"title": "Example", "content": attributePageDataState.example }}/>
            </section>
          </Paper>

          {displayChronology(attributePageDataState.elements)}
          {displayElements(attributePageDataState.elements)}
        </Container>
      </Layout>
    </div>
  );
};

export default AttributePage;