import axios from "axios";
import React, { useEffect } from "react";

import { useSelector, useStore } from "react-redux";
import ENDPOINT_URL from "../../ENDPOINT_URL";

import {
  receiveHome,
  ReceiveHomeAction,
  requestHome,
} from "../../State/home/actions";
import { State } from "../../State/reducers";
import Context from "./components/Context/Context";

const Home: React.FC = () => {
  const store = useStore();
  const { home } = useSelector((state: State) => state);

  useEffect(() => {
    async function fetchHome(): Promise<ReceiveHomeAction | string> {
      store.dispatch(requestHome());

      try {
        const { data } = await axios.get(`${ENDPOINT_URL.Home}`);
        return store.dispatch(receiveHome(data));
      } catch (err) {
        /** @todo Error handling. */
        return "";
      }
    }

    fetchHome();
  }, [store]);

  return (
    <div>
      <Context home={home} />
    </div>
  );
};

export default Home;
