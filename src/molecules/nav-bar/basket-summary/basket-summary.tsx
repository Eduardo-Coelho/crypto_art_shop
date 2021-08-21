import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "./basket-summary.scss";
import { Link } from "react-router-dom";
import { RemoveFromBasket } from "../../../state/basket-state/actions";
import { useStore } from "react-redux";
import { BasketState } from "../../../state/basket-state/store";
import { GBPFormatter } from "../../helper-functions";

const BasketSummary: React.FC<any> = ({ setToggle, basket }) => {
  const store = useStore();

  const subItems = (basket: BasketState) => {
    const totalItemsSum = basket.items.reduce((accumulator, currentValue) => {
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
        className="basket-summary"
      >
        {basket.items.map((item: any, index: number) => {
          return (
            <li key={`basket-item${index}`}>
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
        <div className="sub-basket">
          <h1> {subItems(basket)} </h1>
        </div>
      </div>
    </>
  );
};

export default BasketSummary;
