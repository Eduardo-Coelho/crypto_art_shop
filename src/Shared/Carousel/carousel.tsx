import React from "react";
import { FeaturedArt } from "../../Home/State/actions";
import AliceCarousel from "react-alice-carousel";
import "./carousel.css";

interface Props {
  item: any;
  type: string;
}

enum TypeEnum {
  HeadLine = "HeadLine",
  FeaturedContent = "FeaturedContent",
}

const Carousel: React.FC<Props> = ({ item, type }) => {
  console.log("from with in the", item, type);
  let Data;
  let Responsive;

  switch (type) {
    case TypeEnum.HeadLine:
      Data = item.Art.map((item: any) => {
        return (
          <div className="gallary-layer-HeadLine grabbable">
            <img
              className="gallary-item-HeadLine disableselect disabledrag"
              src={item}
              alt=""
            />
          </div>
        );
      });
      Responsive = {
        1000: { items: 1 },
      };
      break;
    case TypeEnum.FeaturedContent:
      Data = item.map((i: any) => {
        return (
          <div className="gallary-layer-FeaturedContent">
            <img
              className="gallary-item-FeaturedContent disableselect disabledrag"
              src={i.Art[0]}
              alt=""
            />
            <img
              className="gallary-item-FeaturedContent hide"
              src={i.Art[1]}
              alt=""
            />
          </div>
        );
      });
      Responsive = {
        1000: { items: 3 },
      };
      break;

    default:
      break;
  }

  return (
    <div className="gallary">
      <AliceCarousel
        children={Data}
        responsive={Responsive}
        autoPlayInterval={3000}
        autoPlayDirection="ltr"
        autoPlay={true}
        mouseTracking
        disableButtonsControls={true}
        disableDotsControls={true}
      />
    </div>
  );
};

export default Carousel;
