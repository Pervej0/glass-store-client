import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Spinner from "../Shared/Spinner/Spinner";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, isAdmin } = useAuth();
  return isLoading ? (
    <Spinner />
  ) : (
    <Route
      {...rest}
      render={({ location }) =>
        user && isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
