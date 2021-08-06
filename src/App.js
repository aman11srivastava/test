import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dashboard from "./Dashboard";
import {LinkedInPopUp} from "react-linkedin-login-oauth2";
import LinkedInPage from "./LinkedInPage";
import Testcomp from "./Testcomp";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/linkedin" component={LinkedInPopUp} />
        <Route path="/" component={LinkedInPage} />
        <Route exact path="/testing" component={Testcomp} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
