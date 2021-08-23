import { Button, Container, Grid, LinearProgress } from "@material-ui/core";
import React from "react";
import Carousel, {
  TypeEnumCarousel,
} from "../../../../atoms/carousel/carousel";
import { AddToBasket, GetBasktetState } from "../../../../state/cart-state/actions";
import "./product-content.scss";

const productInfo: React.FC<any> = ({ product, store }) => {
  const cart = GetBasktetState();
  return (
    <>
      <div className="product-info">
        <h1>Test</h1>
      </div>
    </>
  );
};

export default productInfo;
