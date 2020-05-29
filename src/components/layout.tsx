import React from "react";
import Header from "../components/header";
import { createMuiTheme, ThemeProvider, Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#db5462', // mC2 pink
    },
    secondary: {
      main: '#4d5d5d', // footer gray
    }
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      color: 'white',
      background: '#4d5d5d',
      height: '175px',
      paddingTop: '0.2em',
      paddingLeft: '1em',
      paddingRight: '1em',
      width: '100%%',
      margin: 'auto',
      position:'relative',
    }
  })
);

export default function Layout({ children }) {
  const styles = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div>
          <Header/>
          
          {children}

          <section className = {styles.footer}>
              <Typography>
                <h2>Partnership</h2>
                <p>This project is supported by the Labex Arts-H2H and benefits from financial support from the ANR as part of the “Investments for the future” program (ANR-10-LABX-80-01).</p>
              </Typography>
          </section>
      </div>
    </ThemeProvider>
  )
}