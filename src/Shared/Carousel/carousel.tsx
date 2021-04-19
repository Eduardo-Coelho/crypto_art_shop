import React from "react";
import AliceCarousel from "react-alice-carousel";

import { useHistory } from "react-router-dom";
import { Contents } from "../../State/home/actions";
import "./carousel.scss";

interface Props {
  item: any;
  type: string;
}

enum TypeEnum {
  HeadLine = "HeadLine",
  FeaturedContent = "FeaturedContent",
  ProductContent = "ProductContent",
}

const Carousel: React.FC<Props> = ({ item, type }) => {
  const history = useHistory();
  let Data;
  let Responsive;
  let disableDotsControls = true;
  let gallaryClassName = "";

  const handleOnClick = (id: string): void => {
    history.push(`/Product${id}`);
  };

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
              <button
                onClick={() => {
                  handleOnClick(i.id);
                }}
                className="view-btn"
              >
                View
              </button>
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
      gallaryClassName = "gallary-headLine";
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
      gallaryClassName = "gallary-featuredContent";
      break;
    case TypeEnum.ProductContent:
      Data = item.map((i: string) => {
        return (
          <div className="gallary-layer-ProductContent">
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
      break;

    default:
      break;
  }

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

export default Carousel;
