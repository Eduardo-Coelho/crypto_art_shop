import React, { useEffect } from "react";

import { useSelector, useStore } from "react-redux";
import { Store } from "redux";

import { fetchHome, ReceiveHomeAction } from "../../State/home/actions";
import { State } from "../../State/reducers";
import FeaturedContent from "./components/featured-content/featured-content";
import HeadLine from "./components/head-line/head-line";

export const fetchHomeData = (store: Store): Promise<ReceiveHomeAction> =>
  store.dispatch(fetchHome());

const Home: React.FC = () => {
  const store = useStore();
  const { home } = useSelector((state: State) => state);

  useEffect(() => {
    if (!home.featuredArt) {
      fetchHomeData(store);
    }
  }, []);

  return (
    <div>
      {home.featuredArt && home.featuredArt.length > 0 ? (
        <>
          <HeadLine />
          <FeaturedContent />
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Home;
