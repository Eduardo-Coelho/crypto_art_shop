import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../Reducers";

const ProductContent: React.FC = () => {
  const { Product } = useSelector((state: State) => state);

  return <div></div>;
};

export default ProductContent;
