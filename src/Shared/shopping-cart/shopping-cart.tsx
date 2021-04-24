import React, { useState } from "react";
import "./shopping-cart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ShoppingCart: React.FC = () => {
  const [state, setstate] = useState(true);

  return (
    <>
      <span className="overlayer-shoppingCart">
        <span className="items-count"> 0 </span>
        <FontAwesomeIcon className="icon" icon={faShoppingCart} />
      </span>
    </>
  );
};

export default ShoppingCart;
