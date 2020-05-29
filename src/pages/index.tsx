import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default function Home() {
  return (
        <Layout>
          <Link to="/film">Film</Link>
          <Link to="/number">Number</Link>
          <Link to="/song">Song</Link>
          <Link to="/person">Person</Link>
          <Link to="/categories">Catégories</Link>
          <Link to="/attribute">Attribute</Link>
        </Layout>
    );
}