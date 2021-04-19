import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "react-redux";
import ProductContent from "./components/product-content/product-content";
import { fetchProduct } from "../../State/product/actions";

interface RouteParams {
  productSlug: string;
}

const Product: React.FC = () => {
  const store = useStore();
  const params = useParams() as RouteParams;
  useEffect(() => {
    fetchProduct(params.productSlug, store.dispatch);
  }, []);

  return (
    <>
      <ProductContent />
    </>
  );
};

export default Product;
