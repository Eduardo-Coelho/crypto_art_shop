import React, { useEffect } from "react";
import { fetchProduct } from "./State/actions";
import { useParams } from "react-router-dom";
import { useStore } from "react-redux";
import ProductContent from "./Componets/ProductContent/productContent";

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
    <>
      <ProductContent />
    </>
  );
};

export default Product;
