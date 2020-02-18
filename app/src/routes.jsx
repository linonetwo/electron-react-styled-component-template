import React from 'react';
import { Switch, Route } from 'react-router';
import ROUTES from './constants/routes.json';
import Welcome from './pages/welcome/welcome';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={ROUTES.WELCOME} component={Welcome} />
      </Switch>
    );
  }
}

export default Routes;
