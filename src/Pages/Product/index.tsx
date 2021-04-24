import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "react-redux";
import ProductContent from "./components/product-content/product-content";
import {
  fetchProduct,
  ReceiveProductAction,
} from "../../State/product/actions";
import { Store } from "redux";

interface RouteParams {
  productSlug: string;
}

export const fetchProducttData = (
  store: Store,
  params: RouteParams
): Promise<ReceiveProductAction> =>
  store.dispatch(fetchProduct(params.productSlug));

const Product: React.FC = () => {
  const store = useStore();
  const params = useParams() as RouteParams;

  useEffect(() => {
    fetchProducttData(store, params);
  }, []);

  return (
    <>
      <ProductContent />
    </>
  );
};

export default Product;
