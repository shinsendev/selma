import React from "react";
import Header from "./header";
import Footer from "./footer";
import { createMuiTheme, ThemeProvider, Theme, makeStyles, createStyles } from '@material-ui/core/styles';


const theme = createMuiTheme({
  typography: {
    body1: {
      fontSize: 13,
    },
  },
  palette: {
    primary: {
      main: '#db5462', // mC2 pink
    },
    secondary: {
      main: '#4d5d5d', // footer gray
    },
  },
});



export default function BaseLayout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Header/>
                {children}
                <Footer/>
            </div>
        </ThemeProvider>
  )
}