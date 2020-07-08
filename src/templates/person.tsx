import React from "react";
import Layout from "../components/layout";
import CoworkersList from "../components/organisms/CoworkersList";
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
import PropertiesList from "../components/organisms/PropertiesList";
import Property from "../components/molecules/Property";
import FilmsList from "../components/organisms/FilmsList";
import CircularProgressWithLabel from "../components/molecules/CircularProgressWithLabel";
import { Link } from "gatsby";
import "../styles/personPage.css";

const PersonPage = ( { pageContext: { person } }) => {

  // table configuration
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
        // {title: "Type", content: person.type},
        {title: "Viaf", content: person.viaf},
      ];
  }

  function displayNumbers(numbers) {
    return (
      <Paper className='category-section numbers-paper' elevation={0}>
        <h2 className='properties-title'>Numbers</h2>
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
                  <TableCell align="right"><Link to={/number/+number.uuid}>{number.title}</Link></TableCell>
                  <TableCell align="right"><Link to={/film/+number.filmUuid}>{number.filmTitle}</Link></TableCell>
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

  function getProfessions(persons:Array<any>):Array<string> {
    const jobsList = [];
    persons.map(person => {
        if (!jobsList.includes(person.profession)) {
          jobsList.push(person.profession);
        }
      }
    );
    return jobsList;
  }

  function displayPersons(persons) {
    const professionsList = getProfessions(persons);
    professionsList.map(profession => {
      
    })

    const personsByProfessions = []; // ['choregraoher': [{'fullname': 'Fred Astaire', 'numbers': ''}]

    return (
      <Paper className='category-section numbers-paper' elevation={0}>
        <h2 className='properties-title'>Co-workers</h2>

        {personsByProfessions.map((profession:Array<any>) => ( // display by profession
            <div>displayPersons(profession.persons)</div>
        ))}
      </Paper>
    )
  }

  function displayPresence(average:number, films:Array<any>, name:string) {
    if (films.length > 0) {
      return (
        <Paper className='category-section' elevation={0}>
          <h2 className='properties-title'>{films.length} Films with {name} as performer</h2>
          <Typography variant="body1">Average shot length for {name}: {average/100} seconds</Typography>

          <div>
            <List dense={true} className="performerdFilmsList">
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
          </div>

        </Paper>
      )
    }
  }

  return (
    <Layout>
      <Container className='container' maxWidth="md">
        <h2 className="main-item-title">{person.fullname}</h2>

          {/*general informations properties*/}
          <PropertiesList title='General informations' data={getPropertiesData()}></PropertiesList>

          {/* films list */}
          <FilmsList title='Films' films={person.relatedFilms}></FilmsList>

          {/* numbers list  // if relatedNumbersByProfession // Fred Astaire uuid  = c6395587-ee36-4610-b87e-fd0e6fd40086 */}
          {displayNumbers(person.relatedNumbers)}

        <Grid container spacing={1}>

          <Grid item xs={12} md={6} lg={6} key={'presence-'+person.uuid}>
            {/*presence into numbers as performers */}
            {displayPresence(person.averageShotLength, person.presenceInFilms, person.fullname)}
          </Grid>
          <Grid item xs={12} md={6} lg={6} key={'coworker-'+person.uuid}>
          {/* associated people list */}
          <CoworkersList title='Choregraphers' data={person.choregraphers}></CoworkersList>
          <CoworkersList title='Composers' data={person.composers}></CoworkersList>
          <CoworkersList title='Lyricists' data={person.lyricists}></CoworkersList>
          {/*{displayPersons(person.relatedPersonsByProfession)}*/}
          </Grid>

        </Grid>

      </Container>
    </Layout>
  )
}

export default PersonPage;