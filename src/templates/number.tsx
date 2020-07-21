import React from "react";
import Layout from "../components/layout";
import { Paper, Container, Typography, Box, Grid } from "@material-ui/core"
import { graphql } from "gatsby"
import Timecode from "../helpers/timecode";
import "../styles/numberPage.css";
import { Link } from "gatsby";

const NumberPage = ({ pageContext: { number } }) =>  {

  function displayTimeCode(timecode:number):number {
    return Timecode.convert(timecode);
  }

  function displayList(list:Array<any>, property:string = '') {
    let response = 'NA';
    if(list.length > 0) {
      response = '';
      list.map((item, index:number) => {
        if (index === list.length-1) {
          // if there is no property, we don't need to use it (for person, we need to get person.fullname but for censorship we directly use the value of the censorship)
          (property)? response = response+item[property] :response = response+item;
        }
        else {
          (property)? response = response+item[property]+', ' :response = response+item+', ';
        }

      });
    }
    return response;
  }

  // display Link List
  function displaySongs(list:Array<any>) {
    let response = 'NA';
    let songs = [];
    if(list.length > 0) {
      list.map((song, index:number) => {
        if (index === list.length-1) {
          songs.push(<Link to ={/song/+ song.uuid}>{song['title']}</Link>);
        }
        else {
          songs.push(<span><Link to ={/song/+ song.uuid}>{song['title']}</Link>, </span>);
        }
      });
    }

    if (songs.length > 0) {
      return songs;
    }

    return response;
  }

  function computeAverageShotLength():number {
    return Math.round((number.endingTc - number.startingTc)/number.shots);
  }

  return (
    <Layout>
      <Container maxWidth="lg">

        <h2 className="main-item-title">{number.title}</h2>
        <h3 className="film">{number.film}</h3>

        <section className="main-content">
          <Grid container spacing={1}>

            <Grid item xs={12} md={4} lg={4}>
              <Paper className='category-section' elevation={0}>
                <h2 className='properties-title'>Description</h2>
                <Typography variant="body1"><span className='property-title'>Starting time code: </span>{displayTimeCode(number.startingTc)}</Typography>
                <Typography variant="body1"><span className='property-title'>Ending time code: </span>{displayTimeCode(number.endingTc)}</Typography>
                <Typography variant="body1"><span className='property-title'>Beginning: </span>{number.beginning}</Typography>
                <Typography variant="body1"><span className='property-title'>Ending: </span>{number.ending}</Typography>
                <Typography variant="body1"><span className='property-title'>Outlines: </span>{number.completenessOption}</Typography>
                <Typography variant="body1"><span className='property-title'>Completeness: </span>{displayList(number.completeness)}</Typography>
                <Typography variant="body1"><span className='property-title'>Structure: </span>{number.structure}</Typography>
                <Typography variant="body1"><span className='property-title'>Shots: </span>{number.shots}</Typography>
                <Typography variant="body1"><span className='property-title'>Average shot length: </span>{computeAverageShotLength()} sec</Typography>
                <Typography variant="body1"><span className='property-title'>Performance: </span>{number.performance}</Typography>
                <Typography variant="body1"><span className='property-title'>Performers: </span>{displayList(number.performers, 'fullname')}</Typography>
                <Typography variant="body1"><span className='property-title'>Cast: </span>{number.cast}</Typography>
                <Typography variant="body1"><span className='property-title'>Stars who don't participate: </span>{displayList(number.noParticipationStars, 'fullname')}</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
              <Paper className='category-section' elevation={0}>
                <h2 className='properties-title'>Backstage</h2>
                <Typography variant="body1"><span className='property-title'>Spectators: </span> {number.spectators}</Typography>
                <Typography variant="body1"><span className='property-title'>Diegetic performance?</span> {number.diegeticPerformance}</Typography>
                <Typography variant="body1"><span className='property-title'>Visible musicians: </span>{number.visibleMusicians}</Typography>

                <h2 className='properties-title'>Themes</h2>
                <Typography variant="body1"><span className='property-title'>Topic: </span>{number.topic}</Typography>
                <Typography variant="body1"><span className='property-title'>Diegetic place: </span>{number.diegeticPlace}</Typography>
                <Typography variant="body1"><span className='property-title'>Imaginary place: </span>{number.imaginaryPlace}</Typography>
                <Typography variant="body1"><span className='property-title'>Ethnic stereotypes: </span>{number.ethnicStereotypes}</Typography>
                <Typography variant="body1"><span className='property-title'>Exoticism: </span>{number.exoticism}</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
              <Paper className='category-section' elevation={0}>
                <h2 className='properties-title'>Music & dance</h2>
                <Typography variant="body1"><span className='property-title'>Song: </span>{displaySongs(number.songs)}</Typography>
                <Typography variant="body1"><span className='property-title'>Musical ensemble: </span>{displayList(number.musicalEnsemble)}</Typography>
                <Typography variant="body1"><span className='property-title'>Dubbing: </span>{number.dubbing}</Typography>
                <Typography variant="body1"><span className='property-title'>Tempo: </span>{displayList(number.tempo)}</Typography>
                <Typography variant="body1"><span className='property-title'>Musical styles: </span>{displayList(number.musicalStyles)}</Typography>
                <Typography variant="body1"><span className='property-title'>Arrangers: </span>{displayList(number.arrangers, 'fullname')}</Typography>
                <Typography variant="body1"><span className='property-title'>Dance director: </span>{displayList(number.choregraphers, 'fullname')}</Typography>
                <Typography variant="body1"><span className='property-title'>Dance ensemble: </span>{displayList(number.danceEnsemble)}</Typography>
                <Typography variant="body1"><span className='property-title'>Dancing type: </span>{displayList(number.dancingType)}</Typography>
                <Typography variant="body1"><span className='property-title'>Dance subgenre: </span>{displayList(number.danceSubgenre)}</Typography>
                <Typography variant="body1"><span className='property-title'>Dance content: </span>{displayList(number.danceContent)}</Typography>

                <h2 className='properties-title'>Intertextuality</h2>
                <Typography variant="body1"><span className='property-title'>Source: </span>{number.source}</Typography>
                <Typography variant="body1"><span className='property-title'>Quotation: </span>{displayList(number.quotation)}</Typography>
              </Paper>
            </Grid>

          </Grid>
        </section>

      </Container>

    </Layout>
  );
};

export default NumberPage;