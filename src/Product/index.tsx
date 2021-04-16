import React, { useEffect } from "react";
import { useStore } from "react-redux";
import { fetchProduct } from "./State/actions";

const Product: React.FC = () => {
  const store = useStore();
  useEffect(() => {
    fetchProduct(store.dispatch);
  });

  return <div></div>;
};

export default Product;
