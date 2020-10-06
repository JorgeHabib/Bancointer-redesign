import React from 'react';
import { Route as DefaultRoute, Redirect, RouteProps as DefaultRouteProps } from 'react-router-dom';

interface RouteProps extends DefaultRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = { user: true };

  if (!user && isPrivate) {
    return <Redirect to="/" />
  }

  if (user && !isPrivate) {
    return <Redirect to="/dashboard" />
  }

  return (
    <DefaultRoute
      {...rest}
      render={() => <Component />}
    />
  )
}

export default Route;
