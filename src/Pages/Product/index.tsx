import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useStore } from "react-redux";
import ProductContent from "./components/product-content/product-content";
import {
  receiveProduct,
  ReceiveProductAction,
  requestProduct,
} from "../../State/product/actions";
import { State } from "../../State/reducers";
import axios from "axios";
import ENDPOINT_URL from "../../ENDPOINT_URL";

interface RouteParams {
  productSlug: string;
}

const Product: React.FC = () => {
  const { product } = useSelector((state: State) => state);
  const store = useStore();
  const params = useParams() as RouteParams;

  useEffect(() => {
    if (params.productSlug === product.productSlug) {
      return;
    }
    async function fetchProduct(
      productSlug: string
    ): Promise<ReceiveProductAction | string> {
      store.dispatch(requestProduct(productSlug));

      try {
        const { data } = await axios.get(
          `${ENDPOINT_URL.Product}${productSlug}`
        );
        return store.dispatch(receiveProduct(data, productSlug));
      } catch (err) {
        /** @todo Error handling. */
        return "";
      }
    }

    fetchProduct(params.productSlug);
  }, [params]);

  return <>{product.id && product.cdn ? <ProductContent /> : "Loading..."}</>;
};

export default Product;
