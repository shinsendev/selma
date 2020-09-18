import React from "react";
import Layout from "../templates/layout/layout";
import { Container, Paper, Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import "../styles/page.css";

const AboutPage = ({data}) =>  {

  return (
    <div className="about-container">
      <Layout>
        <Container maxWidth="md" className="container">
          <Paper elevation={0} className="content-wrapper ">
          <h2>Project</h2>

          <p>This prototype website is the product of a collaborative research project on the Hollywood film musical launched in 2015 and involving an international team of scholars in film studies, musicology, and dance studies. This archive-based project approaches the film musical genre at the scale of the musical number, rather than the film narrative. Our shared goal is to investigate the cultural and ideological stakes of the musical by focusing in a systematic fashion on the genre’s essential elements: music, dance, and spectacle as combined in the musical number as a vehicle of cinematic meaning.</p>

          <p>The project includes this digital humanities research tool which is still a work in progress: a database defining and categorizing the numbers in film musicals made between 1927 and 1972 along ten categories (outlines, music, dance, themes, intertextuality, etc.) and multiple subcategories (number of shots, performance types, topics, musical styles, dancing styles, etc.), all defined in our thesaurus. Our long term goal is to include as many films as possible in the database, creating a resource for project members, and eventually other scholars and students, to study the film musical from a variety of corpus studies approaches.</p>

          <h2>Corpus description</h2>

          <p>The main page mentions the data entered to date :</p>

          <ul>
              <li>the whole list of films comes out of Clive Hirshhorn (The Hollywood Musical, London: Octopus Books, 1981) with ongoing additions</li>
              <li>the number of films for which we have entered data. This is mostly a sample that we constituted to have the first statistics (we picked about 10% of the annual production). And there are also ongoing additions. The films’s pages indicate whether they belong or not to the initial sample.</li>
              <li>the amount of numbers in those films for which we input data (musical numbers are the central item in the database)</li>
         </ul>

          <p>Other items in the database : songs, persons (directors, performers, choreographers, etc.), stage shows, stage numbers.</p>

          <p>In addition to the thesaurus</p>
          <ul>
            <li>All data are related to musical numbers, except for those on censorship which involve the whole film. Issues on adaptation are dealt with both for the film and the number.</li>
            <li>time codes refer to versions of the films shared by the participants.</li>
            <li>The outlines are defined following these principles. In a mostly narrative genre like the musical, the beginning of a number also depends on context. In a context where the viewer is anticipating performed numbers within the diegesis or storyworld, numbers begin when the musical introduction to said number begins (even if it’s heard in the distance). In a so-called integrated musical, numbers begin when someone acts in a way that signals a definitive tilt towards the musical genre (when someone starts to sing or dance). The music for the start of this sort of number might have been playing already for a while in the background score, but only when someone in the film starts to make decidedly musical moves does the number actually begin.</li>
            <li>Ending time codes correspond to the end of the music. Do not include the final applause which is to be heard once a diegetic number is over.</li>
            <li>The number of shots includes all shots between two time codes. Usually (with some possible exceptions), a shot with a superimposition or with a split screen, counts for one shot. When there’s a cut inside of the frame, no change because the shot is composite.</li>
            <li>When it is impossible to count,  the indication is “0”. (E.g. “Cover Girl” [Cover Girl], “Polka Dot…” [The Gang’s All Here])</li>
            <li>Numbers generally bear the title of the main song. Some production numbers have specific titles (given by a title). We had to make up some titles, for example for medleys.</li>
            <li>Spoken but non-singing skits (like Ziegfeld Follies) are not to be classified, though typical of the musical genre.</li>
            <li>The category “performers” is a non-exhaustive list of names of the main performers. Inactive personalities are not listed unless they are major stars (e.g. James Mason in the position of a spectator in A Star Is Born). in that case, they are “stars who don’t participate”.</li>
            <li>NA means “non applicable”</li>
        </ul>

        <h2>Main references</h2>

          <Table size="small" aria-label="main references table">
            <TableBody>
              <TableRow>
                <TableCell>Film release date (1st American release)</TableCell>
                <TableCell>Internet Movie Database</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Stage shows</TableCell>
                <TableCell>Internet Broadway Database</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Song dates</TableCell>
                <TableCell>Catalog of copyright entries, Library of CongressaAlso available on archive.org</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Censorship (Production Code Administration)</TableCell>
                <TableCell>Motion Picture Association of America. Production Code Administration records, Margaret Herrick Library, Los Angeles (physical and digital library)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Legion of Decency</TableCell>
                <TableCell>Motion Pictures Classified by National Legion of Decency, Feb 1936-Oct. 1959, (New York: National Legion of Decency, 1959).</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <p>Some data were established during the project by the team members, such as the identification of an uncredited dance director or arranger, the link between a film or a number and a Broadway source.</p>

          <h2>Editorial choices</h2>

          <p>Pages featuring date on persons (e.g. Fred Astaire) have been thought for performers rather than other occupations.</p>
          <p>The film posters come mostly from the imdb and are not the product of a research aiming at historical accuracy.</p>

          <h2>Additional documentation</h2>

          <p>Other working documents (sample of films, database structure) are being published on the project’s website.</p>

          <h2>Data check</h2>

          <p>...</p>

          <h2>Progress</h2>

          <p>The scientific committee is still working on data verification and harmonisation, this will be a long process.</p>

          <p>Data on the following items are still partial: lyricists, composers, arrangers, song dates, links between film numbers and stage numbers.</p>

          <h2>Website access</h2>

          <p>Until the site is fully functioning and the  verification is complete, the website is only partially open. Even for participants, certain data visualizations are not yet accessible without a password.</p>
          </Paper>
        </Container>
      </Layout>
    </div>

  )
};

export default AboutPage;