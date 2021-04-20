import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useStore } from "react-redux";
import ProductContent from "./components/product-content/product-content";
import {
  fetchProduct,
  ReceiveProductAction,
} from "../../State/product/actions";
import { Store } from "redux";
import { State } from "../../State/reducers";

interface RouteParams {
  productSlug: string;
}

const Product: React.FC = () => {
  const { product } = useSelector((state: State) => state);
  const store = useStore();
  const params = useParams() as RouteParams;

  useEffect(() => {
    async function fetchProductData(store: Store, params: RouteParams) {
      await store.dispatch(fetchProduct(params.productSlug));
    }

    fetchProductData(store, params);
  }, [store, params]);

  return (
    <>{product.id && !product.loading ? <ProductContent /> : "Loading..."}</>
  );
};

export default Product;
