import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./Pages/home/Home";
import Details from "./Pages/details/Details"

function App({ baseURL }) {

  return (
    <Router basename={baseURL}>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/details/:id" render={(routeProps) => <Details {...routeProps} />} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;



/*
*
    <Router basename={baseURL}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/details/:id">
          <Details />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
*/