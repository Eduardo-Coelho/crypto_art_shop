import React from "react";
import "./nav-bar.scss";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="nav-outlayer">
        <div className="nav-innnerlayer">
          <div className="nav-logo">
            <h1>Crypto Art Shop</h1>
          </div>
          <div className="nav-controls">
            <div className="nav-root">
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-end"
              >
                <Grid item xs={1}>
                  <div className="nav-item">
                    <Link to={{ pathname: "/" }}>
                      <p>Home</p>
                    </Link>
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <div className="nav-item">
                    <p>How Cryptoart Works</p>
                  </div>
                </Grid>
                <Grid item xs={1}>
                  <div className="nav-item">
                    <p>Gallery</p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
