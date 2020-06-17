import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { Container } from "@material-ui/core";

export default function Home() {
  return (
        <Layout>
          <Container className='container' maxWidth="md">
            <ul>
              <li><Link to="/film">Film</Link></li>
              <li><Link to="/number">Number</Link></li>
              <li><Link to="/song">Song</Link></li>
              <li><Link to="/person">Person</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/attribute">Attribute</Link></li>
            </ul>
          </Container>
        </Layout>
    );
}