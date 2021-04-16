import React, { useEffect } from "react";
import { useStore } from "react-redux";
import FeaturedContent from "./Componets/FeaturedContent/featuredContent";
import HeadLine from "./Componets/HeadLine/headLine";
import { fetchHome } from "./State/actions";

const Home: React.FC = () => {
  const store = useStore();
  useEffect(() => {
    fetchHome(store.dispatch);
  });

  return (
    <div>
      <HeadLine />
      <FeaturedContent />
    </div>
  );
};

export default Home;
