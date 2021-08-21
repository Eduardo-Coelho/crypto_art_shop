import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "redux";

import routes from "./Routes";
import NavBar from "./molecules/nav-bar/nav-bar";

interface AppProps {
  store: Store;
}

const App: React.FC<AppProps> = ({ store }) => (
  <Provider store={store}>
    <NavBar />
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  </Provider>
);

export default App;
