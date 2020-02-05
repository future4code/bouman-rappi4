import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import restaurantsReducer from "./restaurantsReducer";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    restaurantsReducer,
    // Outros reducers aqui
  });
