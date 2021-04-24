import React from "react";
import { useStore } from "react-redux";
import { Store } from "redux";

import { fetchHome, ReceiveHomeAction } from "../../State/home/actions";
import Context from "./components/Context/Context";

export const fetchHomeData = (store: Store): Promise<ReceiveHomeAction> =>
  store.dispatch(fetchHome());

const Home: React.FC = () => {
  const store = useStore();
  fetchHomeData(store);
  return (
    <div>
      <Context />
    </div>
  );
};

export default Home;
