import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "./basket-summary.scss";
import { Link } from "react-router-dom";
import { RemoveFromBasket } from "../../State/basket/actions";
import { useStore } from "react-redux";

const BasketSummary: React.FC<any> = ({ basket }) => {
  const store = useStore();
  return (
    <>
      <div className="basket-summary">
        {basket.items.map((item: any, index: number) => {
          return (
            <li key={`basket-item${index}`}>
              <Link to={{ pathname: `/product/${item.id}` }}>
                {item.name.substring(0, 17)} <b> ${item.price}</b>
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
      </div>
    </>
  );
};

export default BasketSummary;
