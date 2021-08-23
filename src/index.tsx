import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import createStore from "./state/store";
import "./assists/styles/index.scss";

const appElement = document.getElementById("root");

const store = createStore();

const Index: React.FC = () => (
  <Router>
    <App store={store} />
  </Router>
);

ReactDOM.render(<Index />, appElement);
