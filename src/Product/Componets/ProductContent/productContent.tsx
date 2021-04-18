import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../Reducers";

const ProductContent: React.FC = () => {
  const { Product } = useSelector((state: State) => state);

  return <>{Product.loading ? <h1> Loading... </h1> : <h1>Loaded...</h1>}</>;
};

export default ProductContent;
