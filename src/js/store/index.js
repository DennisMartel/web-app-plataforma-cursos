import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducer from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducer,
  process.env.NODE_ENV == "production" ? applyMiddleware(thunk) : composeEnhancers(applyMiddleware(thunk))
);

export default store;