import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";

import initialState from "./initialState";
import rootReducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
