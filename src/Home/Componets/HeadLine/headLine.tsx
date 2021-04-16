import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../Reducers";
import Carousel from "../../../Shared/Carousel/carousel";

const HeadLine: React.FC = () => {
  const homeState = useSelector((state: State) => state.Home);

  return (
    <>
      {homeState.loading ? (
        <h1> HeadLine Loading... </h1>
      ) : (
        <div>
          <Carousel item={homeState.showcasing} type={"HeadLine"} />
        </div>
      )}
    </>
  );
};

export default HeadLine;
