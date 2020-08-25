import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./views/App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Route } from "react-router-dom";
import SparkHome from "./views/spark/SparkHome";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import ExchangeRates from "./views/graphql/ExchangeRates";

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <ApolloProvider client={client}>
        <Route path="/" exact={true} component={App} />
        <Route path="/spark/home/:number" component={SparkHome} />
        <Route path="/rates" component={ExchangeRates} />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
