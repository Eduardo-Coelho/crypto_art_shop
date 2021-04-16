import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../Reducers";

const FeaturedContent: React.FC = () => {
  const homeState = useSelector((state: State) => state.Home);
  return <div></div>;
};

export default FeaturedContent;
