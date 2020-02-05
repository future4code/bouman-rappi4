import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import restaurantsReducer from "./restaurantsReducer";
import profileReducer from './profileReducer';

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    restaurantsReducer,
    profileReducer,
    // Outros reducers aqui
  });
