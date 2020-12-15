import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./views/App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Route } from "react-router-dom";
import MaterialHome from "./views/material-test/MaterialHome";
import SparkHome from "./views/spark/SparkHome";
import SparkMainPage from "./views/spark/SparkMainPage";
import FirstPage from "./views/spark/firstpage";
import Page from "./views/spark/page";
import Draft from "./views/spark/draft";
import FormExample from "./views/spark/FormExample";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/" exact={true} component={App} />
        <Route path="/home" exact={true} component={SparkMainPage} />
        <Route path="/material" component={MaterialHome} />
        <Route path="/spark/home/:number" component={SparkHome} />
        <Route path="/form" component={FormExample} />
        <Route path="/spark/test" component={FirstPage} />
        <Route path="/spark/page" component={Page} />
        <Route path="/spark/draft" component={Draft} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
