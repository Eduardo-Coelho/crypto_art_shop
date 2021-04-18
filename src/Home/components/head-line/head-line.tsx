import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../State/reducers";
import Carousel from "../../../Shared/carousel/carousel";

const HeadLine: React.FC = () => {
  const { Home } = useSelector((state: State) => state);

  return (
    <>
      {Home.loading ? (
        <h1> HeadLine Loading... </h1>
      ) : (
        <div>
          <Carousel key="HeadLine" item={Home.showCasing} type={"HeadLine"} />
        </div>
      )}
    </>
  );
};

export default HeadLine;
