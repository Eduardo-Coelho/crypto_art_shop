import React from "react";
import { HomeState } from "../../../../State/home/store";
import FeaturedContent from "../featured/featured";
import HeadLine from "../head-line/head-line";

interface Props {
  home: HomeState;
}

const Context: React.FC<Props> = ({ home }) => {
  return (
    <>
      {!home.loading ? (
        <>
          <HeadLine showCasing={home.showCasing} />
          <FeaturedContent featuredArt={home.featuredArt} />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Context;
