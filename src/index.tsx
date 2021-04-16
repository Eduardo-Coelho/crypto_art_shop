import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import createStore from "./Store";

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
    <App store={store} />
  </Router>
);

ReactDOM.render(<Index />, appElement);
