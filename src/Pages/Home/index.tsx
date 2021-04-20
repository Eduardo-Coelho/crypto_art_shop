import React, { useEffect } from "react";

import { useSelector, useStore } from "react-redux";
import { Store } from "redux";

import { fetchHome, ReceiveHomeAction } from "../../State/home/actions";
import { State } from "../../State/reducers";
import FeaturedContent from "./components/featured-content/featured-content";
import HeadLine from "./components/head-line/head-line";

const Home: React.FC = () => {
  const store = useStore();
  const { home } = useSelector((state: State) => state);

  useEffect(() => {
    async function fetchHomeData(store: Store) {
      await store.dispatch(fetchHome());
    }

    fetchHomeData(store);
  }, [store]);

  return (
    <div>
      {home.featuredArt && home.featuredArt.length > 0 ? (
        <>
          <HeadLine />
          <FeaturedContent />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
