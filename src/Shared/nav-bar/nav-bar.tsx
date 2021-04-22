import React from "react";
import "./nav-bar.scss";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="nav-outlayer">
        <div className="nav-innnerlayer">
          <div className="nav-logo">
            <h1>Crypto Art Shop</h1>
          </div>
          <ul className="nav-controls">
            <li className="nav-item">
              <p>How Cryptoart Works</p>
            </li>

            <li className="nav-item">
              <p>Gallery</p>
            </li>

            <li className="nav-item">
              <Link to={{ pathname: "/" }}>
                <p>Home</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
