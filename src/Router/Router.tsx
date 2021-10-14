import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { AppContextProviders } from "../Application/AppContextProviders";

import { GabbyApp2, BlankPage, WorkBenchPage } from "../Pages";

const GabbyApp3 = GabbyApp2;
const GabbyComponentsPage = GabbyApp2;

const homeDir = process.env.NODE_ENV === "production" ? "/gabby-query-protocol-www/" : "/";

const Router = (): JSX.Element => {
  return (
    <AppContextProviders>
      <BrowserRouter>
        <Switch>
          <Route exact path={homeDir} component={GabbyApp3} />
          <Route path={`${homeDir}workbench`} component={WorkBenchPage} />
          <Route path={`${homeDir}gabby-components`} component={GabbyComponentsPage} />

          <Route path={`${homeDir}blank-page`} component={BlankPage} />
          <Route path={`${homeDir}gabby3`} component={GabbyApp2} />

          {/* Not Found */}
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </AppContextProviders>
  );
};
export default Router;
