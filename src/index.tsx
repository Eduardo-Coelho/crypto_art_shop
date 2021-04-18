import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import createStore from "./State/store";
import "./index.css";
import NavBar from "./Shared/nav-bar/nav-bar";

const appElement = document.getElementById("root");
declare global {
  interface Window {
    PreloadedState: {};
  }
}

const preloadedState = window.PreloadedState || {};
const store = createStore(preloadedState);

const Index: React.FC = () => (
  <Router>
    <NavBar />
    <App store={store} />
  </Router>
);

ReactDOM.render(<Index />, appElement);
