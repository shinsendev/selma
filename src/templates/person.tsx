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
  TableRow
} from "@material-ui/core"
import PropertiesList from "../components/organisms/PropertiesList";
import FilmsList from "../components/organisms/FilmsList";
import { Link } from "gatsby"
import Property from "../components/molecules/Property"


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

  function displayNumber(numbers) {
    console.log(numbers);

    if (numbers.length == 0) {
      return;
    }

    return (
      <Paper className='category-section numbers-paper' elevation={0}>
        <h2 className='properties-title'>Numbers</h2>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="Numbers list">
            <TableHead>
              <TableRow>
                <TableCell>Position</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Film</TableCell>
                <TableCell align="right">Released Year</TableCell>
                <TableCell align="right">Professions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {numbers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((number) => (
                <TableRow key={number.uuid} hover role="checkbox" tabIndex={-1}>
              {/*    <TableCell component="th" scope="row">{number.order+1}</TableCell>*/}
              {/*    <TableCell align="right"><Link to={/number/+number.uuid}>{number.title}</Link></TableCell>*/}
              {/*    <TableCell align="right"><Property data={{content: number.beginTc, type: 'timecode'}} /></TableCell>*/}
              {/*    <TableCell align="right"><Property data={{content: number.endTc, type: 'timecode'}} /></TableCell>*/}
              {/*    <TableCell align="right"><Property data={{content: number.length, type: 'timecode'}} /></TableCell>*/}
              {/*    <TableCell align="right"><Property data={{content: number.performers, type: 'list', options: {"listPropertyTitle": "fullname"}}} /></TableCell>*/}
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

  return (
    <Layout>
      <Container className='container' maxWidth="md">
        <h2 className="main-item-title">{person.fullname}</h2>

        <PropertiesList title='General informations' data={getPropertiesData()}></PropertiesList>

        {/* films list */}
        <FilmsList title='Films' films={person.relatedFilms}></FilmsList>

        {/* numbers list  // if relatedNumbersByProfession // Fred Astaire uuid  = c6395587-ee36-4610-b87e-fd0e6fd40086 */}
        {displayNumber(person.relatedNumbersByProfession)}

        {/* associated people list */}

      </Container>
    </Layout>
  )
}

export default PersonPage;