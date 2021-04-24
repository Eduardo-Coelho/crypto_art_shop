import React from "react";
import Carousel from "../../../../Shared/carousel/carousel";

const HeadLine: React.FC<any> = ({ showCasing }) => {
  return (
    <>
      <div>
        <Carousel item={showCasing} type={"HeadLine"} />
      </div>
    </>
  );
};

export default HeadLine;
