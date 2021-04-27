import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "./basket-summary.scss";
import { Link } from "react-router-dom";

const BasketSummary: React.FC<any> = ({ basket }) => {
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
                <FontAwesomeIcon icon={faTimesCircle} />
              </span>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default BasketSummary;
