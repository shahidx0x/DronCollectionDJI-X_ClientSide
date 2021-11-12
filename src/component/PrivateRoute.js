import React from "react";
import { Redirect, Route } from "react-router";
// import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  //   const { user } = useAuth();
  const isAuth = localStorage.getItem("isAuth");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
