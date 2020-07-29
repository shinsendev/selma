import React from "react";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import { createMuiTheme, ThemeProvider, Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import SelmaTheme from "../components/logic/SelmaTheme"

const theme = SelmaTheme();

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