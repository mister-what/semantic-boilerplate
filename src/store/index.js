import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from "redux";
import createSagaMiddleware from "redux-saga";
import * as reducerSlices from "./reducer/index";
import { indexSaga } from "./sagas";


const sagaMiddleware = createSagaMiddleware();

const preloadedState = {};

const reducer = combineReducers(reducerSlices);

const composeEnhancers = process.env.NODE_ENV !== "production" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

export const store = createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(indexSaga);

if(process.env.NODE_ENV !== "production") {
  window.store = store;
}

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./reducer/index", () => {
    store.replaceReducer(combineReducers(reducerSlices));
  });
}
