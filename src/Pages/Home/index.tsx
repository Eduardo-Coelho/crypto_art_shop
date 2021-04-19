import React, { useEffect } from "react";

import { useStore } from "react-redux";
import { Store } from "redux";

import { fetchHome, ReceiveHomeAction } from "../../State/home/actions";
import FeaturedContent from "./components/featured-content/featured-content";
import HeadLine from "./components/head-line/head-line";

export const fetchHomeData = (store: Store): Promise<ReceiveHomeAction> =>
  store.dispatch(fetchHome());

const Home: React.FC = () => {
  const store = useStore();

  useEffect(() => {
    fetchHomeData(store);
  }, []);

  return (
    <div>
      <HeadLine />
      <FeaturedContent />
    </div>
  );
};

export default Home;
