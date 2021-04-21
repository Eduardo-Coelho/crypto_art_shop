import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../../State/reducers";
import FeaturedContent from "../featured/featured";
import HeadLine from "../head-line/head-line";

const Context: React.FC = () => {
  const { home } = useSelector((state: State) => state);
  return (
    <>
      <div>
        <HeadLine showCasing={home.showCasing} />
        <FeaturedContent featuredArt={home.featuredArt} />
      </div>
    </>
  );
};

export default Context;
