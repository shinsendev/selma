import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";
import Header from "../components/header";

export default function Home() {
  return (
      <Layout>
        <Header/>
        <Link to="/song">Song</Link>
      </Layout>
    );
}