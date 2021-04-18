import React, { useEffect } from "react";
import { useStore } from "react-redux";
import FeaturedContent from "./components/featured-content/featured-content";
import HeadLine from "./components/head-line/head-line";
import { fetchHome } from "./state/actions";

const Home: React.FC = () => {
  const store = useStore();
  useEffect(() => {
    fetchHome(store.dispatch);
  }, []);

  return (
    <div>
      <HeadLine />
      <FeaturedContent />
    </div>
  );
};

export default Home;
