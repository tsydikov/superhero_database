import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { routes } from "../routes";
import { LIST_ROUTE } from "../utils/consts";

const AppRouter = () => {
  return (
    <Switch>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={LIST_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
