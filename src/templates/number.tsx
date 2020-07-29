import React from "react";
import Layout from "./layout";
import { Paper, Container, Typography, Box, Grid } from "@material-ui/core"
import Timecode from "../helpers/timecode";
import "../styles/numberPage.css";
import Property from "../components/molecules/Property";
import MusicVideoIcon from "@material-ui/icons/MusicVideo";

const NumberPage = ({ pageContext: { number } }) =>  {

  console.log(number);
  function displayTimeCode(timecode:number):number {
    return Timecode.convert(timecode);
  }

  function computeAverageShotLength():number {
    return Math.round((number.endingTc - number.startingTc)/number.shots);
  }

  return (
    <Layout>
      <Container maxWidth="lg">

        <div className="main-item-title-wrapper">
          <Typography variant="h2" className="main-item-title">
          <MusicVideoIcon className="icon-main-item"/>
            {number.title}
          </Typography>
          <h3 className="film">{number.film}</h3>
        </div>

        <section className="main-content">
          <Grid container spacing={1}>

            <Grid item xs={12} md={4} lg={4}>
              <Paper className='category-section' elevation={0}>
                <h2 className='properties-title'>Description</h2>
                <Property data={{"title": "Starting time code", "content": number.startingTc, "type":'timecode' }}/>
                <Property data={{"title": "Ending time code", "content": number.endingTc, "type":'timecode' }}/>
                <Property data={{"title": "Beginning", "content": number.beginning, "type":'attributeList', "options": { "listPropertyTitle": "title"} }}/>
                <Property data={{"title": "Ending", "content": number.ending, 'model': 'attribute', "type":'attributeList', "options": { "listPropertyTitle": "title"} }}/>
                <Property data={{"title": "Outlines", "content": number.completenessOption, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
                <Property data={{"title": "Completeness", "content": number.completeness, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
                <Property data={{"title": "Structure", "content": number.structure, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
                <Property data={{"title": "Shots", "content": number.shots, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
                <Property data={{"title": "Average shot length", "content": computeAverageShotLength()+ ' sec' }}/>
                <Property data={{"title": "Performance", "content": number.performance, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
                <Property data={{"title": "Director(s)", "content": number.directors, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
                <Property data={{"title": "Performer(s)", "content": number.performers, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
                <Property data={{"title": "Cast", "content": number.cast, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
                <Property data={{"title": "Stars who don't participate", "content": number.noParticipationStars, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
              <Paper className='category-section' elevation={0}>

                <h2 className='properties-title'>Backstage</h2>
                <Property data={{"title": "Spectators", "content": number.spectators, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
                <Property data={{"title": "Diegetic performance?", "content": number.diegeticPerformance, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
                <Property data={{"title": "Visible musicians", "content": number.visibleMusicians, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>

                <h2 className='properties-title'>Themes</h2>
                <Property data={{"title": "Topic", "content": number.topic, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
                <Property data={{"title": "Diegetic place", "content": number.diegeticPlace, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
                <Property data={{"title": "Imaginary place", "content": number.imaginaryPlace, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
                <Property data={{"title": "Ethnic stereotypes", "content": number.ethnicStereotypes, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
                <Property data={{"title": "Exoticism", "content": number.exoticism, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
              <Paper className='category-section' elevation={0}>

                <h2 className='properties-title'>Music & dance</h2>
                <Property data={{"title": "Song", "content": number.songs, "type":'attributeList', "model":"song", "options": { "listPropertyTitle": "title"}}}/>
                <Property data={{"title": "Musical ensemble", "content": number.musicalEnsemble, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>

                <Property data={{"title": "Dubbing", "content": number.dubbing }}/>
                <Property data={{"title": "Tempo", "content": number.tempo, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>

                <Property data={{"title": "Musical styles", "content": number.musicalStyles, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
                <Property data={{"title": "Arrangers", "content": number.arrangers, "type":'attributeList', "model":"person", "options": { "listPropertyTitle": "fullname"}}}/>

                <Property data={{"title": "Dance director", "content": number.danceDirectors, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "fullname"}}}/>

                <Property data={{"title": "Dance ensemble", "content": number.danceEnsemble, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
                <Property data={{"title": "Dancing type", "content": number.tempo, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
                <Property data={{"title": "Dance subgenre", "content": number.dancingType, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
                <Property data={{"title": "Dance content", "content": number.danceSubgenre, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>

                <h2 className='properties-title'>Intertextuality</h2>

                <Property data={{"title": "Source", "content": number.sources, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
                <Property data={{"title": "Quotation", "content": number.quotation, "type":'attributeList', "model":"attribute", "options": { "listPropertyTitle": "title"}}}/>
              </Paper>
            </Grid>

          </Grid>
        </section>

      </Container>

    </Layout>
  );
};

export default NumberPage;