import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthDataContext } from "../auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuthDataContext();
  console.log("current user", user);
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to={{ pathname: "/" }} />
      }
    />
  );
};

export default PrivateRoute;
