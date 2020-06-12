import React from "react"
import Layout from "../components/layout";
import { Paper, Container, Typography, Box } from "@material-ui/core";
import { graphql } from "gatsby"

const NumberPage = ({data}) =>  {
  const number = data.mc3.number;

  function displayList(list:Array<any>, property:string = '') {
    let response = 'NA';
    if(list.length > 0) {
      response = '';
      list.map((item, index:number) => {
        if (index === list.length-1) {
          // if there is no property, we don't need to use it (for person, we need to get person.fullname but for censorship we directly use the value of the censorship)
          (property)? response = response = response+item[property] :response = response+item;
        }
        else {
          (property)? response = response+item[property]+', ' :response = response+item+', ';
        }

      });
    }
    return response;
  }

  function computeAverageShotLength():number {
    return (number.endingTc - number.startingTc)/number.shots;
  }

  return (
      <Layout>
          <Container maxWidth="md">
            <h2 className="main-item-title">{number.title}</h2>
            <h3>{number.film}</h3>

            <Paper className='category-section' elevation={0}>
              <h2 className='properties-title'>Description</h2>
              <Typography variant="body1"><span className='property-title'>Starting time code: </span>{number.startingTc}</Typography>
              <Typography variant="body1"><span className='property-title'>Ending time code: </span>{number.endingTc}</Typography>
              <Typography variant="body1"><span className='property-title'>Beginning: </span>{number.beginning}</Typography>
              <Typography variant="body1"><span className='property-title'>Ending: </span>{number.ending}</Typography>
              <Typography variant="body1"><span className='property-title'>Completeness: </span>{displayList(number.completeness)}</Typography>
              <Typography variant="body1"><span className='property-title'>Completeness options: </span>{number.completenessOptions}</Typography>
              <Typography variant="body1"><span className='property-title'>Structure: </span>{number.structure}</Typography>
              <Typography variant="body1"><span className='property-title'>Shots: </span>{number.shots}</Typography>
              <Typography variant="body1"><span className='property-title'>Average shot length: </span>{computeAverageShotLength()} sec</Typography>
              <Typography variant="body1"><span className='property-title'>Performance: </span>{number.performance}</Typography>
              <Typography variant="body1"><span className='property-title'>Performers: </span>{number.performers}</Typography>
              <Typography variant="body1"><span className='property-title'>Cast: </span>{number.cast}</Typography>
              <Typography variant="body1"><span className='property-title'>Stars who don't participate: </span>{number.noParticipationStars}</Typography>
            </Paper>

            <Paper className='category-section' elevation={0}>
              <h2 className='properties-title'>Backstage</h2>
              <Typography variant="body1"><span className='property-title'>Spectators: </span> {number.spectators}</Typography>
              <Typography variant="body1"><span className='property-title'>Diegetic performance?</span> {number.diegeticPerformance}</Typography>
              <Typography variant="body1"><span className='property-title'>Visible musicians: </span>{number.visibleMusicians}</Typography>
            </Paper>

            <Paper className='category-section' elevation={0}>
              <h2 className='properties-title'>Themes</h2>

              <Typography variant="body1"><span className='property-title'>Topic: </span>{number.topic}</Typography>
              <Typography variant="body1"><span className='property-title'>Diegetic place: </span>{number.diegeticPlace}</Typography>
              <Typography variant="body1"><span className='property-title'>Imaginary place: </span>{number.imaginaryPlace}</Typography>
              <Typography variant="body1"><span className='property-title'>Ethnic stereotypes: </span>{number.ethnicStereotypes}</Typography>
              <Typography variant="body1"><span className='property-title'>Exoticism: </span>{number.exoticism}</Typography>
            </Paper>

            <Paper className='category-section' elevation={0}>
              <h2 className='properties-title'>Music & dance</h2>
              <Typography variant="body1"><span className='property-title'>Song: </span>{number.topic}</Typography>
              <Typography variant="body1"><span className='property-title'>Musical ensemble: </span>{number.topic}</Typography>
              <Typography variant="body1"><span className='property-title'>Dubbing: </span>{number.dubbing}</Typography>
              <Typography variant="body1"><span className='property-title'>Tempo: </span>{number.topic}</Typography>
              <Typography variant="body1"><span className='property-title'>Musical styles: </span>{number.topic}</Typography>
              <Typography variant="body1"><span className='property-title'>Arrangers: </span>{number.topic}</Typography>
              <Typography variant="body1"><span className='property-title'>Dance director: </span>{number.topic}</Typography>
              <Typography variant="body1"><span className='property-title'>Dance ensemble: </span>{displayList(number.danceEnsemble)}</Typography>
              <Typography variant="body1"><span className='property-title'>Dancing type: </span>{displayList(number.dancingType)}</Typography>
              <Typography variant="body1"><span className='property-title'>Dance subgenre: </span>{displayList(number.danceSubgenre)}</Typography>
              <Typography variant="body1"><span className='property-title'>Dance content: </span>{number.topic}</Typography>
              <Typography variant="body1"><span className='property-title'>Dance content: </span>{number.topic}</Typography>
            </Paper>

            <Paper className='category-section' elevation={0}>
              <h2 className='properties-title'>Intertextuality</h2>
              <Typography variant="body1"><span className='property-title'>Source: </span>{number.source}</Typography>
              <Typography variant="body1"><span className='property-title'>Quotation: </span>{number.quotation}</Typography>
            </Paper>

          </Container>
      </Layout>
  );
};

export default NumberPage;

export const query = graphql`
  {
    mc3 {
      number(id:"/api/numbers/41751cf9-7837-441b-b252-c109ada02376") {
        id
        title
        film
        startingTc
        endingTc
        beginning
        ending
        completeness
        completenessOptions
        structure
        shots
        averageShotLength
        performance
        performers
        cast
        noParticipationStars
        spectators
        diegeticPerformance
        visibleMusicians
        topic
        diegeticPlace
        imaginaryPlace
        ethnicStereotypes
        exoticism
        song
        musicalEnsemble
        dubbing
        tempo
        musicalStyles
        arrangers
        danceDirector
        danceEnsemble
        dancingType
        danceSubgenre
        danceContent
        source
        quotation
      } 
    }
  }
`