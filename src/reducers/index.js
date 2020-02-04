import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import products from "./products";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    products,
    // Outros reducers aqui
  });
