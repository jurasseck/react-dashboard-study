import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import Layout from './layout';
import Login from './pages/Login'
import './styles/global.css'
const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
      <Switch>
        <Route path="/login" component={Login} />          
        <Route path="/admin" render={(props) => <Layout {...props} />} />
      </Switch>
    </Router>,
    document.getElementById("root")
  );
