import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import AddressFormPage from "../AddressFormPage";
import FeedPage from "../FeedPage/index";
import ProfilePage from "../ProfilePage";
import EditAddressPage from "../EditAddressPage";
import EditDataUserPage from "../EditDataUserPage";
import CartPage from "../CartPage";
import RestaurantDetails from "../RestaurantDetails";
import SearchPage from "../SearchPage";

export const routes = {
  loginPage: "/",
  signUpPage: "/signUp",
  addressFormPage: "/signUp/addressForm",
  feedPage: "/feed",
  profilePage: "/profile",
  editAddressPage: "/profile/edit-address",
  editDataUserPage: "/profile/edit-user",
  cartPage: "/cart",
  restaurantDetails: "/restaurantDetails",
  searchPage: "/feed/search",
}; 

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.loginPage} component={LoginPage} />
        <Route exact path={routes.signUpPage} component={SignUpPage} />
        <Route exact path={routes.addressFormPage} component={AddressFormPage} />
        <Route exact path={routes.profilePage} component={ProfilePage} />
        <Route exact path={routes.editAddressPage} component={EditAddressPage} />
        <Route exact path={routes.editDataUserPage} component={EditDataUserPage} />
        <Route exact path={routes.cartPage} component={CartPage} />
        <Route exact path={routes.feedPage} component={FeedPage} />
        <Route exact path={routes.restaurantDetails} component={RestaurantDetails} />
        <Route exact path={routes.searchPage} component={SearchPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
