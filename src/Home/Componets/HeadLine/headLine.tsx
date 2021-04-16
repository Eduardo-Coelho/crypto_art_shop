import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../Reducers";

const HeadLine: React.FC = () => {
  const homeState = useSelector((state: State) => state.Home);
  return (
    <>
      {homeState.loading ? (
        <h1> HeadLine Loading... </h1>
      ) : (
        <h1> Data Loaded.. </h1>
      )}
    </>
  );
};

export default HeadLine;
