import React from "react"
import Layout from "../components/layout";
import { Paper, Container, Typography } from '@material-ui/core';

const PersonPage = () =>  {
    return (
        <Layout>
            <Container maxWidth="md">
                <Paper>
                    <h2>Person Page</h2>
                </Paper>
            </Container>
        </Layout>
    );
};

export default PersonPage;