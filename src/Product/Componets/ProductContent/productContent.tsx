import { Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../Reducers";
import Carousel from "../../../Shared/Carousel/carousel";
import "./productContent.css";

const ProductContent: React.FC = () => {
  const { Product } = useSelector((state: State) => state);

  return (
    <>
      {Product.loading ? (
        <h1> Loading... </h1>
      ) : (
        <Container className="product-container" maxWidth="xl">
          <Grid container direction="row" justify="center">
            <Grid item xs={3}>
              <Carousel
                key="ProductContent"
                item={Product.cdn}
                type="ProductContent"
              />
            </Grid>
            <Grid item xs={3}>
              <h2>Test 2</h2>
            </Grid>
            <Grid item xs={4}>
              <h2>Test 3</h2>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default ProductContent;
