import React from "react";
import ReactDOM from "react-dom";
import Components from "components";
import { ROUTES } from "constant";
import { Provider } from "react-redux";
import Store from "redux/store";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { objectToArray } from "utils";
import "assets/styles/index.scss";
function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Switch>
          {objectToArray(ROUTES).map(({ name, path, component }) => (
            <Route
              key={name}
              path={path}
              component={Components[component]}
              exact
            />
          ))}

          <Route
            key="default-route"
            path="*"
            render={() => <Redirect to={ROUTES.START_SCREEN.path} />}
            exact
          />
        </Switch>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
