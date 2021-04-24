import React from "react";
import AliceCarousel from "react-alice-carousel";
import "./carousel.scss";

interface Props {
  item: any;
}

const CarouselProduct: React.FC<Props> = ({ item }) => {
  let Data;
  let Responsive;
  let disableDotsControls = true;
  let gallaryClassName = "";
  let key;

  Data = item.map((i: string, index: number) => {
    return (
      <div
        key={`ProductContent-${index}`}
        className="gallary-layer-ProductContent"
      >
        <img
          className="gallary-item-ProductContent disableselect disabledrag"
          src={i}
          alt=""
        />
      </div>
    );
  });
  Responsive = {
    1000: { items: 1 },
  };
  disableDotsControls = false;
  key = "gallary-productContent";

  return (
    <div className={gallaryClassName}>
      <AliceCarousel
        children={Data}
        responsive={Responsive}
        autoPlayInterval={3000}
        autoPlayDirection="ltr"
        autoPlay={true}
        mouseTracking
        infinite={true}
        controlsStrategy="responsive"
        disableSlideInfo={true}
        disableButtonsControls={true}
        disableDotsControls={disableDotsControls}
      />
    </div>
  );
};

export default CarouselProduct;
