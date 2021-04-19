import React from "react";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Product from "./Pages/Product";
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
