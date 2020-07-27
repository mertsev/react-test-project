import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import { history } from './reducers/index'
import {ConnectedRouter} from 'connected-react-router';
import {Route, Switch} from 'react-router-dom';
import MaterialHome from './views/material-test/MaterialHome';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
             <Route exact path="/" component={App}/>
             <Route exact path="/material" component={MaterialHome}/>
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
