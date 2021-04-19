import React from "react";
import { Route } from "react-router-dom";

interface StatusProps {
  code: string;
  children: React.ReactElement;
}

const Status: React.FC<StatusProps> = ({ code, children }) => (
  <Route
    render={({ staticContext }): React.ReactElement => {
      if (staticContext) staticContext.statusCode = parseInt(code, 10);
      return children;
    }}
  />
);

export default Status;
