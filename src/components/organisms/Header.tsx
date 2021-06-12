import React from "react";
import { AppBar, Typography, Button, Toolbar, InputBase } from '@material-ui/core';
import { Link } from "gatsby";
import '../../styles/components/header.css';

const Header = (props) => {

    return (
      <div className="header-wrapper">
        <AppBar position="static" color='primary'>
          <Toolbar>

            <div className="header-title">
              <Typography className="title" variant="h1">
                  <Link to="/">Musical MC²</Link>
              </Typography>

              <Typography className="mobile-title" variant="h1">
                <Link to="/">MC²</Link>
              </Typography>
            </div>

            <div className="menu">
              <Typography><a target='_blank' href="https://musicalmc2.hypotheses.org/" className="item">blog</a></Typography>
              <Typography><Link to="/about" className="item">about</Link></Typography>
              <Typography><Link to="/credits" className="item">credits</Link></Typography>
              <Typography><Link to="/search" className="item">search</Link></Typography>
              <Typography><Link to="/categories" className="item">thesaurus</Link></Typography>
            </div>

          </Toolbar>
        </AppBar>
        
      </div>
    )
}
    
export default Header;