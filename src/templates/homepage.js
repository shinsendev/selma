import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { Container, Paper } from "@material-ui/core";

export default ({ pageContext: { homepage } }) => {
  return (
    <Layout>
      <Container className='container' maxWidth="md">

        {homepage.films.map(film => (
          <Paper>
              <h3>{film.title}</h3>
          </Paper>
        ))}
        <ul>
          <p>Voici = {homepage.filmsCount}</p>
          <li><Link to="/film">Film</Link></li>
          <li><Link to="/number">Number</Link></li>
          <li><Link to="/song">Song</Link></li>
          <li><Link to="/person">Person</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/attribute">Attribute</Link></li>
        </ul>
      </Container>
    </Layout>
  )
}
