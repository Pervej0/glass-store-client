import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Spinner from "../Shared/Spinner/Spinner";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

  return isLoading ? (
    <Spinner />
  ) : (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
