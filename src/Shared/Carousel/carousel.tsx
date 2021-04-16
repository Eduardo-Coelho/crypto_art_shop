import React from "react";
import { FeaturedArt } from "../../Home/State/actions";
import AliceCarousel from "react-alice-carousel";
import "./carousel.css";

interface Props {
  item: FeaturedArt;
  type: string;
}

const Carousel: React.FC<Props> = ({ item, type }) => {
  console.log("from with in the", item, type);
  let Data;
  let Responsive;
  let Toggle;

  switch (type) {
    case "HeadLine":
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
      Toggle = false;
      break;
    case "FeaturedContent":
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
        disableDotsControls={Toggle}
      />
    </div>
  );
};

export default Carousel;
