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
                <Typography>Adaptation: {film.adaptation}</Typography>
                <Typography>Shows: {film.stageshows}</Typography>
                <Typography>Remake: {film.remake}</Typography>
              </Paper>

              <Paper>
                <h2>Censorship</h2>
                <Typography>PCA Verdict on the first submitted script: {film.pca}</Typography>
                <Typography>Censored Content: {displayList(film.censorships)}</Typography>
                <Typography>States where the film was censored: {displayList(film.states)}</Typography>
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
                          <TableCell component="th" scope="row">{number.order+1}</TableCell>
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
      film(id: "/api/films/a5271157-65e1-4c53-a0f7-d8e00acdc814") {
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
        remake
        stageshows
        adaptation
        censorships
        pca
        states
        board
        harrison
        protestant
        legion
        length
        numberRatio
        averageNumberLength
      }
    }
  }
`