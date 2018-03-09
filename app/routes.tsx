import * as React from 'react';
import { Switch, Route } from 'react-router';
import { withRouter } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import ExportPage from './containers/ExplorePage';


export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/explore" component={ExportPage} />
      <Route path="/" component={withRouter<any>(HomePage)} />
    </Switch>
  </App>
);
