import React from "react";
import AliceCarousel from "react-alice-carousel";
import { Contents } from "../../Home/State/actions";
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
      Data = item.contents.map((i: Contents) => {
        return (
          <div className="gallary-layer-HeadLine grabbable">
            <div className="layer-HeadLine">
              <div className="HeadLine-name">
                <h1 className="goldText">{i.name}</h1>
                <p className="sub-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloremque consectetur autem minus eum, maiores corporis culpa
                </p>
              </div>
              <button className="view-btn"> View </button>
            </div>
            <img
              className="gallary-item-HeadLine disableselect disabledrag"
              src={i.cdn}
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
      Data = item.map((i: Contents) => {
        return (
          <div className="gallary-layer-FeaturedContent">
            <img
              className="gallary-item-FeaturedContent disableselect disabledrag"
              src={i.cdn}
              alt=""
            />
          </div>
        );
      });
      Responsive = {
        1000: { items: 4 },
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
