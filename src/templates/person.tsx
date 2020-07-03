import React from "react";
import Layout from "../components/layout";
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
} from "@material-ui/core";
import PropertiesList from "../components/organisms/PropertiesList";
import Property from "../components/molecules/Property";
import FilmsList from "../components/organisms/FilmsList";
import CircularProgressWithLabel from "../components/molecules/CircularProgressWithLabel";
import { Link } from "gatsby";

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
        {title: "Type", content: person.type},
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
        <Paper className='category-section numbers-paper' elevation={0}>
          <h2 className='properties-title'>{films.length} Films with {name}</h2>
          <Typography variant="body1">Average shot length for {name}: {average/100} %</Typography>
          {films.map((film) => {
            return (
              <div>
                {film.title+"("+film.releasedYear+")"}
                <CircularProgressWithLabel variant="static" value={(100/film.totalNumbersLength)*film.totalPersonNumbersLength} />
              </div>
            )}
          )}
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
        {displayNumbers(person.relatedNumbersByProfession)}

        {/* associated people list */}
        {displayPersons(person.relatedPersonsByProfession)}

        {/*presence into numbers as performers */}
        {displayPresence(person.averageShotLength, person.presenceInFilms, person.fullname)}

      </Container>
    </Layout>
  )
}

export default PersonPage;