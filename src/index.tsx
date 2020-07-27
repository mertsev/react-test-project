import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import { history } from './app/store'
import {ConnectedRouter} from 'connected-react-router';
import {Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
             <Route exact path="/" component={App}/>
             <Route path="*" render={() => (<h1>PAGE NOT FOUND</h1>)}/>
           </Switch>
       </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
