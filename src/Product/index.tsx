import React, { useEffect } from "react";
import { fetchProduct } from "./State/actions";
import { useLocation, useParams } from "react-router-dom";
import { useStore } from "react-redux";

interface RouteParams {
  productSlug: string;
}

const Product: React.FC = () => {
  const store = useStore();
  const params = useParams() as RouteParams;
  useEffect(() => {
    fetchProduct(params.productSlug, store.dispatch);
  });

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};

export default Product;
