import React from 'react';
import { Switch, useLocation, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Dashboard from '../pages/Dashboard';
import LogIn from '../pages/LogIn';
import { AnimatePresence } from 'framer-motion';

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter={location.pathname === '/dashboard'}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={LogIn} />
        <PrivateRoute path="/dashboard" component={Dashboard} />

        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </AnimatePresence>
  )
}

export default Routes;
