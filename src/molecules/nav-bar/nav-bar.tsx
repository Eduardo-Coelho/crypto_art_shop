import React, { useState } from "react";
import "./nav-bar.scss";
import { Link } from "react-router-dom";
import ShoppingCart from "./shopping-cart/shopping-cart";
import BasketSummary from "./basket-summary/basket-summary";
import { GetBasktetState } from "../../state/basket-state/actions";
import UserSigninModal from "./user-signin-modal/user-signin-modal";

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
              <UserSigninModal />
            </li>

            <li className="nav-item noselect">
              <p>How Cryptoart Works</p>
            </li>

            <li className="nav-item noselect">
              <Link to={{ pathname: "/gallery" }}>
                <p>Gallery</p>
              </Link>
            </li>

            <li className="nav-item noselect">
              <Link to={{ pathname: "/" }}>
                <p>Home</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {toggle ? <BasketSummary setToggle={setToggle} basket={basket} /> : ""}
    </>
  );
};

export default NavBar;
