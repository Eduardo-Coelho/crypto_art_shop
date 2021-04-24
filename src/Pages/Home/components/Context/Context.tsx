import React from "react";
import FeaturedContent from "../featured/featured";
import HeadLine from "../head-line/head-line";

const Context: React.FC<any> = ({ home }) => {
  return (
    <>
      <HeadLine showCasing={home.showCasing} />
      <FeaturedContent featuredArt={home.featuredArt} />
    </>
  );
};

export default Context;
