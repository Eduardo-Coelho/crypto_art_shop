/* eslint-disable import/no-anonymous-default-export */

import React from "react";
import Home from "./Home/";
import NotFound from "./NotFound";
import Status from "./Shared/Status";

export default [
  {
    path: "/",
    component: Home,
    exact: true,
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
