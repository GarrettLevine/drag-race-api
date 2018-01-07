import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

import Main from './Main/Main';
import Admin from './Admin/Admin';
import NoMatch from './NoMatch';

const history = createBrowserHistory()

export default class AppRouter extends React.Component {
  render() {
    return(
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/admin" component={Admin} />
          <Route path="/*" component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}