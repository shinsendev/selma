import React from "react";
import Layout from "../layout/layout";
import CoworkersList from "../../components/organisms/CoworkersList";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip
} from "@material-ui/core";
import PropertiesList from "../../components/organisms/PropertiesList";
import Property from "../../components/molecules/Property";
import FilmsList from "../../components/organisms/FilmsList";
import CircularProgressWithLabel from "../../components/molecules/CircularProgressWithLabel";
import { Link } from "gatsby";
import "../../styles/personPage.css";
import FaceIcon from "@material-ui/icons/Face";
import Melviz from "../../components/organisms/Melviz";

const PersonPage = ( { pageContext: { person } }) => {

  // table configuration
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function getPropertiesData() {
      return [
        {title: "Gender", content: person.gender},
        {title: "Profession", type:"list", content: person.professions},
      ];
  }

  function displayNumbers(numbers) {
    return (
      <Paper className='category-section numbers-paper' elevation={0}>
        <h2 className='properties-title'>{numbers.length} Numbers</h2>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="Numbers list">
            <TableHead>
              <TableRow>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Film</TableCell>
                <TableCell align="right">Released Year</TableCell>
                <TableCell align="right">Professions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {numbers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((number) => (
                <TableRow key={number.uuid} hover role="checkbox" tabIndex={-1}>
                  <TableCell align="right"><Link to={/number/+number.uuid} >{number.title}</Link></TableCell>
                  <TableCell align="right"><Link to={/film/+number.filmUuid} >{number.filmTitle}</Link></TableCell>
                  <TableCell align="right">{number.filmReleasedYear}</TableCell>
                  <TableCell align="right"><Property data={{'content': number.professions, 'type' : 'list'}}/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={numbers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    )
  }

  function displayPresence(average:number, films:Array<any>, name:string) {
    if (films.length > 0) {
      return (
        <Paper className='category-section' elevation={0}>
          <h2 className='properties-title'>{films.length} Film(s) with {name} as performer</h2>
          <h3>Average shot length</h3>
          <div className="average-shot">
            <Typography><strong>{average/100}</strong> seconds</Typography>
          </div>

          <List dense={true} className="performedFilmsList">
            <h3>Presence in the film numbers</h3>
            <Grid container spacing={0}>
              {films.map((film) => {
                return (
                    <Grid item xs={12} md={12} lg={12} key={film.uuid}>
                      <Link to={/film/+film.uuid}>
                        <Tooltip title={
                          <React.Fragment>
                            <Typography color="inherit">All numbers length =  <b>{film.totalNumbersLength}</b> sec</Typography>
                            <Typography color="inherit">All numbers with {name} as performer = <b>{film.totalPersonNumbersLength}</b> sec</Typography>
                          </React.Fragment>
                        } arrow>
                          <ListItem button className="performedFilm">
                              <ListItemIcon>
                                <CircularProgressWithLabel value={(100/film.totalNumbersLength)*film.totalPersonNumbersLength} />
                              </ListItemIcon>

                              <ListItemText className="performedFilmText">
                                <Typography variant="body1">{film.title+" ("+film.releasedYear+")"}</Typography>
                              </ListItemText>
                          </ListItem>
                        </Tooltip>
                      </Link>
                    </Grid>
                )
              })}
            </Grid>
          </List>
        </Paper>
      )
    }
  }

  return (
    <Layout>
      <Container className='container' maxWidth="lg">
        <div className="main-item-title-wrapper">
          <Typography variant="h2" className="main-item-title">
            <FaceIcon className="icon-main-item"/>
            {person.fullname}
          </Typography>
        </div>

        {/*general informations properties*/}
        <PropertiesList title='General informations' data={getPropertiesData()}></PropertiesList>

        {/* films list */}
        <FilmsList title='Films currently in the database' films={person.relatedFilms}></FilmsList>

        {/* numbers list  // if relatedNumbersByProfession // Fred Astaire uuid  = c6395587-ee36-4610-b87e-fd0e6fd40086 */}
        {displayNumbers(person.relatedNumbers)}

      <Grid container spacing={1}>

        <Grid item xs={12} md={6} lg={6} key={'presence-'+person.uuid}>
          {/*presence into numbers as performers */}
          {displayPresence(person.averageShotLength, person.presenceInFilms, person.fullname)}
        </Grid>
        <Grid item xs={12} md={6} lg={6} key={'coworker-'+person.uuid}>
          {/* associated people list */}
          <CoworkersList title='Associated Choregraphers' data={person.choregraphers}></CoworkersList>
          <CoworkersList title='Associated Composers' data={person.composers}></CoworkersList>
          <CoworkersList title='Associated Lyricists' data={person.lyricists}></CoworkersList>

          <Melviz data={person.comparisons} title="Tendencies for the performer’s numbers" />
        </Grid>

      </Grid>

      </Container>
    </Layout>
  )
}

export default PersonPage;