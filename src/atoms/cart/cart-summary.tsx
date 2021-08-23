import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "./cart-summary.scss";
import { Link } from "react-router-dom";
import { RemoveFromBasket } from "../../state/cart-state/actions";
import { useStore } from "react-redux";
import { BasketState } from "../../state/cart-state/store";
import { GBPFormatter } from "../../utility/helper";

const BasketSummary: React.FC<any> = ({ setToggle, cart }) => {
  const store = useStore();

  const subItems = (cart: BasketState) => {
    const totalItemsSum = cart.items.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0);
    return GBPFormatter.format(totalItemsSum);
  };

  return (
    <>
      <div
        onMouseLeave={() => {
          setToggle(false);
        }}
        className="cart-summary"
      >
        {cart.items.map((item: any, index: number) => {
          return (
            <li key={`cart-item${index}`}>
              <Link to={{ pathname: `/product/${item.id}` }}>
                <b> {GBPFormatter.format(item.price)}</b>
                {item.name.substring(0, 19)}
              </Link>
              

              <span>
                <FontAwesomeIcon
                  onClick={() => {
                    RemoveFromBasket(store, item.id);
                  }}
                  icon={faTimesCircle}
                  className="faTimesCircle"
                />
              </span>
            </li>
          );
        })}
        <div className="sub-cart">
          <h1> {subItems(cart)} </h1>
        </div>
      </div>
    </>
  );
};

export default BasketSummary;
