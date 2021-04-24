import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "react-redux";
import ProductContent from "./components/product-content/product-content";
import {
  fetchProduct,
  GetProductState,
  ReceiveProductAction,
} from "../../State/product/actions";
import { Store } from "redux";

interface RouteParams {
  productSlug: string;
}

const fetchProducttData = (
  store: Store,
  params: RouteParams
): Promise<ReceiveProductAction> =>
  store.dispatch(fetchProduct(params.productSlug));

const Product: React.FC = () => {
  const store = useStore();
  const params = useParams() as RouteParams;
  const product = GetProductState();

  useEffect(() => {
    if (product.productSlug === params.productSlug) {
      return;
    }

    fetchProducttData(store, params);
  }, []);

  return (
    <>
      {!product.loading ? <ProductContent product={product} /> : "Loading..."}
    </>
  );
};

export default Product;
