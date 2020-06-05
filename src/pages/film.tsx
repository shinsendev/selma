import React from "react"
import Layout from "../components/layout";
import { Paper, Container, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { graphql } from "gatsby";

const FilmPage = ({data}) =>  {
    const uuid = '6bd560f7-da50-45ad-be92-b37adc3d686a';

    return (
        <Layout>
            <Container maxWidth="md">
                <Paper>
                    <h2>{data.mc3.film.title}</h2>
                  {/*({data.mc3.film.releasedYear})*/}
                  <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Position</TableCell>
                          <TableCell align="right">Title</TableCell>
                          <TableCell align="right">Starting time code</TableCell>
                          <TableCell align="right">Ending time code</TableCell>
                          <TableCell align="right">Length</TableCell>
                          <TableCell align="right">Performers</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.mc3.film.numbers.map((number) => (
                          <TableRow key={number.uuid}>
                            <TableCell component="th" scope="row">{number.order}</TableCell>
                            <TableCell align="right">{number.title}</TableCell>
                            <TableCell align="right">{number.beginTc}</TableCell>
                            <TableCell align="right">{number.endTc}</TableCell>
                            <TableCell align="right">{number.length}</TableCell>
                            <TableCell align="right">NA</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
            </Container>
        </Layout>
    );
};

export default FilmPage;

export const query = graphql`
  {
    mc3 {
      film(id: "/api/films/7a733d0b-d172-44ff-8d4f-f70d1f22133f") {
        title
        numbers
      }
    }
  }
`