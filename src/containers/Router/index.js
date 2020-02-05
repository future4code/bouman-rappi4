import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import AdressFormPage from "../AdressFormPage";
import FeedPage from "../FeedPage/index";
import ProfilePage from "../ProfilePage";
import EditRegisterPage from "../EditRegisterPage";
import EditDataUserPage from "../EditDataUserPage";
import CartPage from "../CartPage";
import { RestaurantDetail } from "../RestaurantDetail";

export const routes = {
  loginPage: "/",
  signUpPage: "/signUp",
  adressFormPage: "/signUp/adressForm",
  feedPage: "/feed",
  profilePage: "/profile",
  editRegisterPage: "/profile/edit-register",
  editDataUserPage: "/profile/edit-user",
  cartPage: "/cart",
  detailsPage: "/feed/details-restaurant"
}; 

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.loginPage} component={LoginPage} />
        <Route exact path={routes.signUpPage} component={SignUpPage} />
        <Route exact path={routes.adressFormPage} component={AdressFormPage} />
        <Route exact path={routes.profilePage} component={ProfilePage} />
        <Route exact path={routes.editRegisterPage} component={EditRegisterPage} />
        <Route exact path={routes.editDataUserPage} component={EditDataUserPage} />
        <Route exact path={routes.cartPage} component={CartPage} />
        <Route exact path={routes.feedPage} component={FeedPage} />
        <Route exact path={routes.detailsPage} component={RestaurantDetail} />

      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
