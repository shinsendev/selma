import React from "react"
import Layout from "../components/layout";
import { Paper, Container, Typography, Box } from "@material-ui/core"

const NumberPage = () =>  {
    return (
        <Layout>
            <Container maxWidth="md">
              <h2 className="main-item-title">Number title</h2>
              <h3>Film Title (2020)</h3>

              <Paper className='category-section' elevation={0}>
                <h2 className='properties-title'>Description</h2>
                <Typography variant="body1"><span className='property-title'>Starting time code:</span></Typography>
                <Typography variant="body1"><span className='property-title'>Ending time code:</span></Typography>
                <Typography variant="body1"><span className='property-title'>Beginning:</span></Typography>
                <Typography variant="body1"><span className='property-title'>Completeness:</span></Typography>
                <Typography variant="body1"><span className='property-title'>Completeness options:</span></Typography>
                <Typography variant="body1"><span className='property-title'>Structure:</span></Typography>
                <Typography variant="body1"><span className='property-title'>Shots:</span></Typography>
                <Typography variant="body1"><span className='property-title'>Average shot length:</span></Typography>
                <Typography variant="body1"><span className='property-title'>Performance:</span></Typography>
                <Typography variant="body1"><span className='property-title'>Performers:</span></Typography>
                <Typography variant="body1"><span className='property-title'>Cast:</span></Typography>
                <Typography variant="body1"><span className='property-title'>Stars who don't participate:</span></Typography>
              </Paper>

              <Paper className='category-section' elevation={0}>
                <h2 className='properties-title'>Backstage</h2>
                <Typography variant="body1"><span className='property-title'>Spectators:</span></Typography>
                <Typography variant="body1"><span className='property-title'>Diegetic performance?</span></Typography>
                <Typography variant="body1"><span className='property-title'>Visible musicians:</span></Typography>
              </Paper>

              <Paper className='category-section' elevation={0}>
                <h2 className='properties-title'>Themes</h2>
                <Typography variant="body1"><span className='property-title'>Costumes:</span></Typography>
                <Typography variant="body1"><span className='property-title'>Ethnic stereotypes:</span></Typography>
                <Typography variant="body1"><span className='property-title'>Diegetic place:</span></Typography>
                <Typography variant="body1"><span className='property-title'>General localisation:</span></Typography>
                <Typography variant="body1"><span className='property-title'>Imaginary place:</span></Typography>
                <Typography variant="body1"><span className='property-title'>Exoticism:</span></Typography>
              </Paper>

              <Paper className='category-section' elevation={0}>
                <h2 className='properties-title'>Music & dance</h2>
              </Paper>

              <Paper className='category-section' elevation={0}>
                <h2 className='properties-title'>Intertextuality</h2>
              </Paper>

            </Container>
        </Layout>
    );
};

export default NumberPage;