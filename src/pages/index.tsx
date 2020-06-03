import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider, Theme, makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  container: {
    height: '600px',
  }
})
);

export default function Home() {

const styles = useStyles();
  return (
        <Layout>
          <Container className={styles.container} maxWidth="md">
            <ul>
              <li><Link to="/film">Film</Link></li>
              <li><Link to="/number">Number</Link></li>
              <li><Link to="/song">Song</Link></li>
              <li><Link to="/person">Person</Link></li>
              <li><Link to="/categories">Catégories</Link></li>
              <li><Link to="/attribute">Attribute</Link></li>
            </ul>
          </Container>
        </Layout>
    );
}