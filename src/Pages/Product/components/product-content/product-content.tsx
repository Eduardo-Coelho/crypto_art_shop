import { Button, Container, Grid, LinearProgress } from "@material-ui/core";
import React from "react";
import Carousel, {
  TypeEnumCarousel,
} from "../../../../molecules/carousel/carousel";
import { GBPFormatter } from "../../../../molecules/helper-functions";
import { AddToBasket, GetBasktetState } from "../../../../state/basket-state/actions";
import "./product-content.scss";

const ProductContent: React.FC<any> = ({ product, store }) => {
  const basket = GetBasktetState();
  return (
    <>
      <div className="product-body">
        <Container className="product-container" maxWidth="xl">
          <Grid container direction="row" justify="center" alignItems="stretch">
            <Grid item md={3}>
              <Carousel
                item={product.cdn}
                type={TypeEnumCarousel.ProductContent}
              />
            </Grid>
            <Grid className="text-center" item md={3}>
              <h1>{product.name}</h1>
              <h2>{GBPFormatter.format(product.price)}</h2>
              <div className="addto-baskte">
                <Button
                  disabled={
                    !!basket.items.find((item: any) => item.id === product.id)
                  }
                  onClick={() =>
                    AddToBasket(store, {
                      id: product.id,
                      name: product.name,
                      price: product.price,
                    })
                  }
                  variant="outlined"
                >
                  {" "}
                  Add to Baskte{" "}
                </Button>
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
