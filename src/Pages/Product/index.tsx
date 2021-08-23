import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "react-redux";

import {
  fetchProduct,
  GetProductState,
  ReceiveProductAction,
  RestProductState,
} from "../../state/product-state/actions";
import { Store } from "redux";
import ProductContent from "./components/product-content/product-content";

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
    fetchProducttData(store, params);

    return () => {
      RestProductState(store);
    };
  }, [store, params]);

  return (
    <>
      {!product.loading ? (
        <ProductContent product={product} store={store} />
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default Product;
