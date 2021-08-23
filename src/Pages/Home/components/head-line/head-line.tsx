import React from "react";
import Carousel, {
  TypeEnumCarousel,
} from "../../../../atoms/carousel/carousel";

const HeadLine: React.FC<any> = ({ showCasing }) => {
  return (
    <>
      <div>
        <Carousel item={showCasing} type={TypeEnumCarousel.HeadLine} />
      </div>
    </>
  );
};

export default HeadLine;
