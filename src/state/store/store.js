import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import rootReducer from "../reducers";
import { thunk } from "redux-thunk"; // Use named import for thunk

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);
