import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "redux";
import routes from "./Routes";

interface AppProps {
  store: Store;
}

const App: React.FC<AppProps> = ({ store }) => (
  <Provider store={store}>
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} component={route.component} />
      ))}
    </Switch>
  </Provider>
);

export default App;
