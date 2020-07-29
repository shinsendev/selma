import React from "react";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";
import Starter from "../../components/molecules/Starter";
import {
  ThemeProvider,
} from "@material-ui/core/styles";
import SelmaTheme from "../../components/logic/SelmaTheme"

const theme = SelmaTheme();

export default function BaseLayout({ children }) {

    const content = ['This website is the product of a collaborative research project on the Hollywood film musical launched in 2015 and involving an international team of scholars in film studies, musicology, and dance studies.This archive-based project approaches the film musical genre at the scale of the musical number, rather than the film narrative.', 'Our shared goal is to investigate the cultural and ideological stakes of the musical by focusing in a systematic fashion on the genre’s essential elements: music, dance, and spectacle as combined in the musical number as a vehicle of cinematic meaning.']

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Header/>
                <Starter title="Musical MC², a collaborative research project on the Hollywood film musical" content= {content}/>
                {children}
                <Footer/>
            </div>
        </ThemeProvider>
  )
}