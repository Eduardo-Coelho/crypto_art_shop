import React from "react";
import FeaturedContent from "../featured/featured";
import HeadLine from "../head-line/head-line";

const Context: React.FC<any> = ({ home }) => {
  return (
    <>
      <div>
        {home.showCasing ? (
          <HeadLine showCasing={home.showCasing} />
        ) : (
          <h1>Loading...</h1>
        )}

        {home.featuredArt && home.featuredArt.length > 0 ? (
          <FeaturedContent featuredArt={home.featuredArt} />
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
};

export default Context;
