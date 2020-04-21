import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import restaurantsReducer from "./restaurantsReducer";
import profileReducer from './profileReducer';
import orderReducer from './orderReducer'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    restaurantsReducer,
    profileReducer,
    orderReducer,
    // Outros reducers aqui
  });
