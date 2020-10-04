import { Typography, Grid, GridList, GridListTile } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";
import '../../styles/components/footer.css';

const Footer = () => {

  return (
    <section className = "footer-wrapper">
      <Grid container spacing={3}>

        <Grid item xs={12} md={6}>
          <Typography variant='h4' gutterBottom>Partnership</Typography>
          <Typography>This project is supported by the Labex Arts-H2H and benefits from financial support from the ANR as part of the “Investments for the future” program (ANR-10-LABX-80-01).</Typography>
        </Grid>

        <Grid item xs={12} md={6}>
            <Grid container alignItems="center" justify="center">
              <a href="http://www.labex-arts-h2h.fr" target="_blank"><img src="https://mc3-website.s3.eu-west-3.amazonaws.com/logo/labex.png" alt="Logo Labex Arts-H2H" /></a>
              <a href="http://eur-artec.fr" target="_blank"><img src="https://mc3-website.s3.eu-west-3.amazonaws.com/logo/artec.png" alt="Logo Artec"/></a>
            </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant='h4' gutterBottom>Development</Typography>
          <Typography>This website has been coded by Gaétan Darquié from <a className="custom-link" target="_blank" href='http://shinsen.fr'>Shinsen Dev</a>.</Typography>
          <Typography>The code is open source: the frontend code is available in <a target='_blank' href='https://github.com/shinsendev/selma'  className="custom-link">selma repository</a> and the  backend api code in <a target='_blank' href='https://github.com/shinsendev/mc3' className="custom-link">mc3 repository</a>.</Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container justify="center" >
            <img src="https://mc3-website.s3.eu-west-3.amazonaws.com/logo/shinsen.png" alt="Logo Shinsen"/>
          </Grid>
        </Grid>

      </Grid>
    </section>
  )
}

export default Footer;