import React, { useEffect } from "react";
import { useStore } from "react-redux";
import { Store } from "redux";

import {
  fetchHome,
  GetHomeState,
  ReceiveHomeAction,
  ResetHomeState,
} from "../../State/home/actions";
import Context from "./components/Context/Context";

const fetchHomeData = (store: Store): Promise<ReceiveHomeAction> =>
  store.dispatch(fetchHome());

const Home: React.FC = () => {
  const store = useStore();
  const home = GetHomeState();
  useEffect(() => {
    fetchHomeData(store);

    return () => {
      ResetHomeState(store);
    };
  }, [store]);

  return <>{!home.loading ? <Context home={home} /> : ""}</>;
};

export default Home;
