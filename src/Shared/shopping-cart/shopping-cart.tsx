import React, { useState } from "react";
import "./shopping-cart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { GetBasktetState } from "../../State/shopping-cart/actions";

const ShoppingCart: React.FC = () => {
  const [state, setstate] = useState(true);
  const basket = GetBasktetState();

  return (
    <>
      <span className="overlayer-shoppingCart">
        {basket.items.length > 0 ? (
          <span className="items-count"> {basket.items.length} </span>
        ) : (
          ""
        )}

        <FontAwesomeIcon className="icon" icon={faShoppingCart} />
      </span>
    </>
  );
};

export default ShoppingCart;
