import React from "react";
import Layout from "../components/layout";
import {
  Paper,
  Grid,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Box
} from "@material-ui/core"
import "../styles/filmPage.css";
import { Link } from "gatsby";
import Property from "../components/molecules/Property";
import PropertiesList from "../components/organisms/PropertiesList";

const FilmPage = ({ pageContext: { film } }) =>  {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function getGeneralPropertiesTitle() {
    return [
      {title: "Sample", content: film.sample},
      {title: "Studio", content: film.studios, type: 'list', options: {"listPropertyTitle": "name"}},
      {title: "IMDB link", content: <a href={'https://www.imdb.com/title/'+film.imdb} target={'_blank'}>{film.imdb}</a>},
      {title: "VIAF", content: film.viaf},
      {title: "Director(s)", content: film.directors, type: 'list', options: {"listPropertyTitle": "fullname"}},
      {title: "Release date (New York)", content: film.releasedYear === 0 ? 'NA' : film.releasedYear },
      {title: "Production date", content: film.productionYear === 0 ? 'NA' : film.productionYear},
    ];
  }

  function getRecyclingPropertiesTitle() {
    return [
      {title: "Adaptation", content: film.adaptation},
      {title: "Shows", content: film.stageshows},
      {title: "Remake", content: film.remake},
    ];
  }

  function getCensorshipPropertiesTitle() {
    return [
      {title: "PCA Verdict on the first submitted script", content: film.pca, type: 'attribute'},
      {title: "Censored Content", content: film.censorships, type: 'attribute-list'},
      {title: "States where the film was censored", content: film.states, type: 'list'},
      {title: "Legion of Decency", content: film.legion},
      {title: "Protestant Motion Picture Council", content: film.protestant},
      {title: "Harrison's Report", content: film.harrison},
      {title: "Film Estimate Board of National Organizations", content: film.board},
    ];
  }

  return (
    <Layout>
      <Container className='container' maxWidth="lg">
        <h2 className="main-item-title">{film.title}</h2>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Paper>
              <Box display={{ xs: "none", md: "block" }}>
                <img className='poster' src={'http://mc2.labex-arts-h2h.univ-paris8.fr/img/films/'+film.imdb+'.jpg'}/>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={8} lg={3}>
            <PropertiesList title='General informations' data={getGeneralPropertiesTitle()} />
          </Grid>

          <Grid item xs={12} sm={12} md={8} lg={3}>
            <PropertiesList title='Recycling' data={getRecyclingPropertiesTitle()} />
          </Grid>

          <Grid item xs={12} sm={12} md={8} lg={3}>
            <PropertiesList title='Censorship' data={getCensorshipPropertiesTitle()} />
          </Grid>

        </Grid>

        <Paper className='category-section numbers-paper' elevation={0}>
          <h2 className='properties-title'>Numbers</h2>
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
                {film.numbers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((number) => (
                  <TableRow key={number.uuid} hover role="checkbox" tabIndex={-1}>
                    <TableCell component="th" scope="row">{number.order+1}</TableCell>
                    <TableCell align="right"><Link to={/number/+number.uuid}>{number.title}</Link></TableCell>
                    <TableCell align="right"><Property data={{content: number.beginTc, type: 'timecode'}} /></TableCell>
                    <TableCell align="right"><Property data={{content: number.endTc, type: 'timecode'}} /></TableCell>
                    <TableCell align="right"><Property data={{content: number.length, type: 'timecode'}} /></TableCell>
                    <TableCell align="right"><Property data={{content: number.performers, type: 'list', options: {"listPropertyTitle": "fullname"}}} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={film.numbers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>

        {/*// Stats*/}
        <section>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <Box className='stat-box numbers-minutes-box'>
                <div className="stat-value">{Math.round(film.numbersLength/60)} min</div>
                <div className="stat-label stat-numbers-minutes">Running time for all numbers</div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className='stat-box movie-minutes-box'>
                <div className="stat-value">{Math.round(film.length/60)} min</div>
                <div className="stat-label stat-movie-minutes">Movie running time</div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className='stat-box numbers-seconds-box'>
                <div className="stat-value">{film.numbersLength} sec</div>
                <div className="stat-label stat-numbers-seconds">Running time for all numbers</div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className='stat-box film-seconds-box'>
                <div className="stat-value">{film.length} sec</div>
                <div className="stat-label stat-film-seconds">Movie running time</div>
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box className='stat-box ratio-box'>
                <div className="stat-value">{film.numbersRatio/100}%</div>
                <div className="stat-label stat-ratio">Ratio number/total length</div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className='stat-box average-box'>
                <div className="stat-value">{film.averageNumberLength} sec</div>
                <div className="stat-label stat-average">Average running time for the numbers in Kiss Me, Kate</div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className='stat-box global-average-box'>
                <div className="stat-value">{film.globalAverageNumberLength} sec</div>
                <div className="stat-label stat-global-average">Average running time for the numbers for all the movies</div>
              </Box>
            </Grid>

          </Grid>
        </section>
      </Container>
    </Layout>
  );
};
export default FilmPage;