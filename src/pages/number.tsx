import React from "react"
import Layout from "../components/layout";
import { Paper, Container, Typography } from '@material-ui/core';

const NumberPage = () =>  {
    return (
        <Layout>
            <Container maxWidth="md">
                <Paper>
                    <h2>Number Page</h2>
                </Paper>
            </Container>
        </Layout>
    );
};

export default NumberPage;