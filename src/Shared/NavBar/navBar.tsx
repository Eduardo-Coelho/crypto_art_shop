import React, { useEffect } from "react";
import "./navBar.css";

const NavBar: React.FC = () => {
  //   useEffect(() => {
  //   });

  return (
    <>
      <nav className="nav-outlayer">
        <div className="top"></div>
        <div className="nav-innnerlayer">
          <div className="nav-logo"></div>
          <div className="nav-controls"></div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
