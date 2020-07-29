import React from "react";
import { createStyles, makeStyles, Theme, fade } from '@material-ui/core/styles';
import { AppBar, Typography, Button, Toolbar, InputBase } from '@material-ui/core';
import { Link } from "gatsby";
import "../../styles/header.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(1),
    },

    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },

    mobileTitle: {
      display: 'none',
      [theme.breakpoints.down('xs')]: {
        display: 'block',
      },
    },

    menu: {
      paddingLeft: theme.spacing(3),
      flexGrow: 1,
      display: "flex",
      flexDirection: "row-reverse"
    },

    item: {
      color:"white",
      textDecoration:"none",
      paddingLeft: theme.spacing(2),
    }

  }),
);

const Header = (props) => {
    const classes = useStyles();
    
    return (
      <div className={classes.root}>
        <AppBar position="static" color='primary'>
          <Toolbar>

            <div className="header-title">
              <Typography className={classes.title} variant="h1">
                  <Link to="/">Musical MC²</Link>
              </Typography>

              <Typography className={classes.mobileTitle} variant="h1">
                <Link to="/">MC²</Link>
              </Typography>
            </div>


            <div className={classes.menu}>
              <Typography><Link to="/about" className={classes.item}>about</Link></Typography>
              <Typography><Link to="/keys" className={classes.item}>keys</Link></Typography>
              <Typography><Link to="/search" className={classes.item}>search</Link></Typography>
              <Typography><Link to="/categories" className={classes.item}>categories</Link></Typography>
            </div>

          </Toolbar>
        </AppBar>
        
      </div>
    )
}
    
export default Header;