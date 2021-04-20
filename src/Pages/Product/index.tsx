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

export const fetchProductData = (
  store: Store,
  params: RouteParams
): Promise<ReceiveProductAction> =>
  store.dispatch(fetchProduct(params.productSlug));

const Product: React.FC = () => {
  const { product } = useSelector((state: State) => state);
  const store = useStore();
  const params = useParams() as RouteParams;

  useEffect(() => {
    if (!product.id) {
      fetchProductData(store, params);
    }
  }, []);

  return <>{product.id ? <ProductContent /> : "Loading..."}</>;
};

export default Product;
