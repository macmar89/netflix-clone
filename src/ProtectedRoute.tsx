import React, {ReactNode} from "react";
import { Route, Redirect } from "react-router-dom";

interface IProtectedRouteProps {
  isAuth: boolean,
  component: any
}

const ProtectedRoute = ({ isAuth: IsAuth, component: Component, ...rest } : IProtectedRouteProps) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (IsAuth) {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
