import React from "react";
import Home from "./Home/";
import NotFound from "./NotFound";
import Product from "./Product";
import Status from "./Shared/Status";

export default [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/Product",
    component: Product,
  },
  {
    path: "*",
    component: (): React.ReactElement => (
      <Status code="404">
        <NotFound />
      </Status>
    ),
  },
];
