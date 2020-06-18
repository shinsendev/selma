import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { Container, Paper } from "@material-ui/core";

export default ({ pageContext: { homepage } }) => {
  return (
    <Layout>
      <Container className='container' maxWidth="md">

        <h2>Films with data</h2>
        {homepage.films.map(film => (
          <Paper>
              <h3>{film.title} ({film.releasedYear})</h3>
              <img src="" alt=""/>
          </Paper>
        ))}

        <h2>Performers</h2>

        {homepage.performers.map(performer => (
          <Paper>
            <h3>{performer.fullname}</h3>
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
