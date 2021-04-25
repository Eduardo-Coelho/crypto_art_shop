import React from "react";
import "./basket-summary.scss";

const BasketSummary: React.FC<any> = ({ basket }) => {
  return (
    <>
      <div className="basket-summary">
        {basket.items.map((item: any, index: number) => {
          return (
            <li key={`basket-item${index}`}>
              {item.name} -- ${item.price}
            </li>
          );
        })}
      </div>
    </>
  );
};

export default BasketSummary;
