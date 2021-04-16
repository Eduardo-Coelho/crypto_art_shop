import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../Reducers";

const FeaturedContent: React.FC = () => {
  const homeState = useSelector((state: State) => state.Home);
  return (
    <>
      {homeState.loading ? (
        <h1> FeaturedContent Loading... </h1>
      ) : (
        <h1> Data Loaded.. </h1>
      )}
    </>
  );
};

export default FeaturedContent;
