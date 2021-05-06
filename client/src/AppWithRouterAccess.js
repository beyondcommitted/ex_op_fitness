import React from "react";
import { Route, useHistory, Switch } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";

import { oktaAuthConfig, oktaSignInConfig } from "./config";

const oktaAuth = new OktaAuth(oktaAuthConfig);

const AppWithRouterAccess = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push("/login");
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} onAuthRequired={customAuthHandler} restoreOriginalUri={restoreOriginalUri}>
      <Switch>

        <Route path="/" exact={true} component={Home} />
        <SecureRoute path="/Dashboard" component={Dashboard} />
        <Route path="/login" render={() => <Login config={oktaSignInConfig} />}/>
        <Route path="/login/callback" component={LoginCallback} />
        <Route path="/test" >  Test </Route>
        
      </Switch>
    </Security>
  );
};

export default AppWithRouterAccess;
