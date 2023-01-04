import React from "react";
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import "tachyons";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { searchRobots, requestRobots } from "./reducers";
// import registerServiceWorker from './registerServiceWorker';
const logger = createLogger();

const rootReducers = combineReducers({ searchRobots, requestRobots });
const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
