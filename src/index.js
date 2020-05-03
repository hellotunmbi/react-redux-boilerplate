import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Import styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/metismenu.min.css";
import "./assets/css/icons.css";
import "./assets/css/style.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Import Redux
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
