import React, { useState } from "react";
import "./nav-bar.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ShoppingCart from "../shopping-cart/shopping-cart";
import BasketSummary from "../basket-summary/basket-summary";
import { GetBasktetState } from "../../State/basket/actions";

const NavBar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const basket = GetBasktetState();
  return (
    <>
      <nav className="nav-outlayer">
        <div className="nav-innnerlayer">
          <div className="nav-logo">
            <h1>Crypto Art Shop</h1>
          </div>
          <ul className="nav-controls">
            <li className="nav-item noselect">
              <ShoppingCart
                toggle={toggle}
                setToggle={setToggle}
                basket={basket}
              />
            </li>

            <li className="nav-item noselect">
              <FontAwesomeIcon className="icon" icon={faUser} />
            </li>

            <li className="nav-item noselect">
              <p>How Cryptoart Works</p>
            </li>

            <li className="nav-item noselect">
              <p>Gallery</p>
            </li>

            <li className="nav-item noselect">
              <Link to={{ pathname: "/" }}>
                <p>Home</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {toggle ? <BasketSummary basket={basket} /> : ""}
    </>
  );
};

export default NavBar;
