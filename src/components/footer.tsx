import { Typography, Grid, GridList, GridListTile } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const Footer = () => {

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        color: 'white',
        background: '#4d5d5d',
        marginTop: theme.spacing(9),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(9),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        margin: 'auto',
        position:'relative',
      },

      customLink: {
        textDecoration:"none",
      },

      h2: {
        fontSize: "1rem",
      }
    })
  );

  const styles = useStyles();

  return (
    <section className = {styles.root}>
      <Grid container spacing={3}>

        <Grid item xs={12} md={6}>
          <Typography variant='h4'>Partnership</Typography>
          <Typography>This project is supported by the Labex Arts-H2H and benefits from financial support from the ANR as part of the “Investments for the future” program (ANR-10-LABX-80-01).</Typography>
        </Grid>

        <Grid item xs={12} md={6}>
            <Grid container alignItems="center" justify="center">
              <img src="https://mc3-website.s3.eu-west-3.amazonaws.com/logo/labex.png" alt="Logo Labex Arts-H2H" />
              <img src="https://mc3-website.s3.eu-west-3.amazonaws.com/logo/artec.png" alt="Logo Artec"/>
            </Grid>
          {/*<img src="https://mc3-website.s3.eu-west-3.amazonaws.com/logo/labex.png" alt="Logo Labex Arts-H2H"/>*/}
          {/*<img src="https://mc3-website.s3.eu-west-3.amazonaws.com/logo/artec.png" alt="Logo Artec"/>*/}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant='h4'>Development</Typography>
          <Typography>This project has been crafted by Gaétan Darquié from <Link className={styles.customLink} to='http://shinsen.fr'>Shinsen Dev</Link>.</Typography>
          <Typography>The code is open source: the frontend code is available in <Link target='_blank' to='https://github.com/shinsendev/selma'  className={styles.customLink}>selma repository</Link> and the  backend api code in <Link target='_blank' to='https://github.com/shinsendev/mc3' className={styles.customLink}>mc3 repository</Link>.</Typography>
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