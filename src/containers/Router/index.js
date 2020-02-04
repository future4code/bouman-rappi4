import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import ProfilePage from "../../components/ProfilePage";

const routes = {
  root: "",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={ProfilePage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
