import React from "react";
import "./shopping-cart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ShoppingCart: React.FC<any> = ({ toggle, setToggle, cart }) => {
  return (
    <>
      <span className="overlayer-shoppingCart">
        {cart.items.length > 0 ? (
          <span className="items-count"> {cart.items.length} </span>
        ) : (
          ""
        )}
        <FontAwesomeIcon
          onClick={() => {
            setToggle(!toggle);
          }}
          className={!toggle ? "icon" : "icon selected"}
          icon={faShoppingCart}
        />
      </span>
    </>
  );
};

export default ShoppingCart;
