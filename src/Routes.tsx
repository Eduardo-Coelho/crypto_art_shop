import React from "react";
import Home from "./Home/";
import NotFound from "./NotFound";
import Product from "./Product";
import Status from "./Shared/status";

export default [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/product:productSlug",
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
