import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "./basket-summary.scss";

const BasketSummary: React.FC<any> = ({ basket }) => {
  return (
    <>
      <div className="basket-summary">
        {basket.items.map((item: any, index: number) => {
          return (
            <li key={`basket-item${index}`}>
              {item.name.substring(0, 18)} <b> ${item.price}</b>
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
