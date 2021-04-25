import { Button, Container, Grid, LinearProgress } from "@material-ui/core";
import React from "react";
import CarouselProduct from "../../../../Shared/carousel/carousel-product";
import { GetProductState } from "../../../../State/product/actions";
import "./product-content.scss";

const ProductContent: React.FC = () => {
  const product = GetProductState();
  return (
    <>
      <div className="product-body">
        <Container className="product-container" maxWidth="xl">
          <Grid container direction="row" justify="center" alignItems="stretch">
            <Grid item md={3}>
              <CarouselProduct item={product.cdn} />
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
                    value={(product.availableLeft / product.availableMax) * 100}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default ProductContent;
function useEffect(arg0: () => () => void, arg1: undefined[]) {
  throw new Error("Function not implemented.");
}
