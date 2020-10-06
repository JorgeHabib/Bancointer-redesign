import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={() => <h1>Teste</h1>} exact />
      <Route path="/dashboard" component={Dashboard} isPrivate />

      <Route component={() => <h2>Falha</h2>} />
    </Switch>
  )
}

export default Routes;
