import React from "react"
import Layout from "../components/layout";
import { Paper, Container, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@material-ui/core';
import { graphql } from "gatsby";

const FilmPage = ({data}) =>  {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    function displayList(list, property:string = '') {
      let response = 'NA';
      if(list.length > 0) {
        response = '';
        list.map((item, index) => {
          if (index === list.length-1) {
            response = response+item.fullname+'';
          }
          else {
            alert(index);
            response = response+item.fullname+', ';
          }

        });
      }
      return response;

    }

    const film = data.mc3.film;

    return (
        <Layout>
            <Container maxWidth="md">
                <h2>{film.title}</h2>

                <Paper>
                  <h2>General informations</h2>
                  <Typography>Sample: {film.sample}</Typography>
                  <Typography>Studio: </Typography>
                  <Typography>IMDB link: {film.imdb}</Typography>
                  <Typography>VIAF: {film.viaf}</Typography>
                  <Typography>Director(s): {displayList(film.directors, 'fullname')}</Typography>
                  <Typography>Release date (New York): {film.releasedYear === 0 ? 'NA' : data.mc3.film.releasedYear  }</Typography>
                  <Typography>Production date: {data.mc3.film.productionYear === 0 ? 'NA' : data.mc3.film.productionYear  }</Typography>
                </Paper>

              <Paper>
                <h2>Recycling</h2>
                <Typography>Adaptation: </Typography>
                <Typography>Shows: </Typography>
                <Typography>Remake: </Typography>
              </Paper>

              <Paper>
                <h2>Censorship</h2>
                <Typography>PCA Verdict on the first submitted script: </Typography>
                <Typography>Censored Content: </Typography>
                <Typography>States where the film was censored: </Typography>
              </Paper>

              <Paper>
                <h2>Numbers</h2>
                <TableContainer component={Paper}>
                  <Table size="small" aria-label="Numbers list">
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
                      {data.mc3.film.numbers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((number) => (
                        <TableRow key={number.uuid} hover role="checkbox" tabIndex={-1}>
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
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={data.mc3.film.numbers.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
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
        uuid
        sample
        studios
        directors
        imdb
        viaf
        productionYear
        releasedYear
        numbers
      }
    }
  }
`