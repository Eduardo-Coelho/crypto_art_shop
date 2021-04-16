import React, { useEffect } from "react";
import { useStore } from "react-redux";
import Header from "./Componets/Header/Header";
import { fetchHome } from "./State/actions";

const Home: React.FC = () => {
  const store = useStore();
  useEffect(() => {
    fetchHome(store.dispatch);
  });

  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
