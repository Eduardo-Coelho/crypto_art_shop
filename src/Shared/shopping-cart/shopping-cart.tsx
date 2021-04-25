import React from "react";
import "./shopping-cart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ShoppingCart: React.FC<any> = ({ toggle, setToggle, basket }) => {
  return (
    <>
      <span className="overlayer-shoppingCart">
        {basket.items.length > 0 ? (
          <span className="items-count"> {basket.items.length} </span>
        ) : (
          ""
        )}
        <FontAwesomeIcon
          onClick={() => {
            setToggle(!toggle);
          }}
          className="icon"
          icon={faShoppingCart}
        />
      </span>
    </>
  );
};

export default ShoppingCart;
