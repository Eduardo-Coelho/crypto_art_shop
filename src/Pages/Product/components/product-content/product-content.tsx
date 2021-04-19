import { Button, Container, Grid, LinearProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../../State/reducers";
import Carousel from "../../../../Shared/carousel/carousel";
import "./product-content.css";

const ProductContent: React.FC = () => {
  const { product } = useSelector((state: State) => state);

  return (
    <>
      {product.loading ? (
        <h1> Loading... </h1>
      ) : (
        <div className="product-body">
          <Container className="product-container" maxWidth="xl">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="stretch"
            >
              <Grid item md={3}>
                <Carousel
                  key="ProductContent"
                  item={product.cdn}
                  type="ProductContent"
                />
              </Grid>
              <Grid className="text-center" item md={3}>
                <h1>{product.name}</h1>
                <h2>${product.price}</h2>
                <div className="addto-baskte">
                  <Button variant="outlined"> Add to Baskte </Button>
                  <div className="items-left">
                    <p>
                      Items left {product.availableLeft}/{product.availableMax}
                    </p>
                    <LinearProgress
                      variant="determinate"
                      value={
                        (product.availableLeft / product.availableMax) * 100
                      }
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      )}
    </>
  );
};

export default ProductContent;
