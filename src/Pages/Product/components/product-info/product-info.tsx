import { Button, Container, Grid, LinearProgress } from "@material-ui/core";
import React from "react";
import Carousel, {
  TypeEnumCarousel,
} from "../../../../molecules/carousel/carousel";
import { AddToBasket, GetBasktetState } from "../../../../state/basket-state/actions";
import "./product-content.scss";

const productInfo: React.FC<any> = ({ product, store }) => {
  const basket = GetBasktetState();
  return (
    <>
      <div className="product-info">
        <h1>Test</h1>
      </div>
    </>
  );
};

export default productInfo;
