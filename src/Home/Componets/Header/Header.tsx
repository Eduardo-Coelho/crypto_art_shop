import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../Reducers";

const Header: React.FC = () => {
  const homeState = useSelector((state: State) => state.Home);
  return (
    <div>
      <h1> {homeState.name} </h1>
      <h2>{homeState.email}</h2>
    </div>
  );
};

export default Header;
