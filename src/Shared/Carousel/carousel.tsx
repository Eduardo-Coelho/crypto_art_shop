import React from "react";
import AliceCarousel from "react-alice-carousel";

import { Link } from "react-router-dom";
import { Contents } from "../../State/home/actions";
import "./carousel.scss";

interface Props {
  item: any;
  type: string;
}

export enum TypeEnumCarousel {
  HeadLine = "HeadLine",
  FeaturedContent = "FeaturedContent",
  ProductContent = "ProductContent",
}

const Carousel: React.FC<Props> = ({ item, type }) => {
  let Data;
  let Responsive;
  let disableDotsControls = true;
  let gallaryClassName = "";
  let key;

  switch (type) {
    case TypeEnumCarousel.HeadLine:
      Data = item.contents.map((i: Contents, index: number) => {
        return (
          <div
            key={`HeadLine-${index}`}
            className="gallary-layer-HeadLine grabbable"
          >
            <div className="layer-HeadLine">
              <div className="HeadLine-name">
                <h1 className="goldText">{i.name}</h1>
                <p className="sub-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloremque consectetur autem minus eum, maiores corporis culpa
                </p>
              </div>
              <Link to={{ pathname: `/product/${i.id}` }}>
                <button className="view-btn">View</button>
              </Link>
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
      key = " gallary-headLine";
      break;
    case TypeEnumCarousel.FeaturedContent:
      Data = item.map((i: Contents, index: number) => {
        return (
          <div
            key={`FeaturedContent-${index}`}
            className="gallary-layer-FeaturedContent"
          >
            <div className="hovered-layer"></div>
            <Link to={{ pathname: `/product/${i.id}` }}>
              <img
                className="gallary-item-FeaturedContent disableselect disabledrag"
                src={i.cdn}
                alt=""
              />
            </Link>
          </div>
        );
      });
      Responsive = {
        1000: { items: 4 },
      };
      gallaryClassName = "gallary-featuredContent";
      key = "gallary-featuredContent";

      break;
    case TypeEnumCarousel.ProductContent:
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
