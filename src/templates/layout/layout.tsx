import React from "react";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";
import { ThemeProvider } from '@material-ui/core/styles';
import SelmaTheme from "../../components/logic/SelmaTheme";
import Starter from "../../components/molecules/Starter"

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