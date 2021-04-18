import React, { useEffect } from "react";
import "./navBar.css";
import Grid from "@material-ui/core/Grid";

const NavBar: React.FC = () => {
  //   useEffect(() => {
  //   });

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
                    <p>Home</p>
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
