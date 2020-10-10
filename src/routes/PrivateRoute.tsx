import React from 'react';
import { Route, Redirect, RouteProps as DefaultRouteProps } from 'react-router-dom';
import { useAuth } from '../contexts/userContext';

interface RouteProps extends DefaultRouteProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  if (!user) {
    return <Redirect to="/" />
  }

  return (
    <Route
      {...rest}
      render={() => <Component />}
    />
  )
}

export default PrivateRoute;
