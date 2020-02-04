import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import AdressFormPage from "../AdressFormPage";
import FeedPage from "../FeedPage";
import CartPage from "../CartPage";
import ProfilePage from "../ProfilePage";

export const routes = {
  loginPage: "/",
  signUpPage: "/signUp",
  adressFormPage: "/signUp/adressForm",
  feedPage: "/feed",
  cartPage: "/cart",
  profilePage: "/profile"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.loginPage} component={LoginPage} />
        <Route exact path={routes.signUpPage} component={SignUpPage} />
        <Route exact path={routes.adressFormPage} component={AdressFormPage} />
        <Route exact path={routes.feedPage} component={FeedPage} />
        <Route exact path={routes.cartPage} component={CartPage} />
        <Route exact path={routes.profilePage} component={ProfilePage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
